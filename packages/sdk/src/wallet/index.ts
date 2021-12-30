/**
 * wallet sdk support to query info about token list, token balance, token price and token value
 */

import { memoize } from '@polkadot/util';
import {
  FixedPointNumber as FN,
  AnyApi,
  Token,
  MaybeCurrency,
  forceToCurrencyName,
  TokenType,
  unzipDexShareName,
  isDexShareName,
  createLiquidCroadloanName
} from '@acala-network/sdk-core';
import { AccountInfo, Balance, RuntimeDispatchInfo } from '@polkadot/types/interfaces';
import { OrmlAccountData } from '@open-web3/orml-types/interfaces';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, shareReplay, filter } from 'rxjs/operators';
import { TokenRecord, WalletConsts, BalanceData, TransferConfig, PresetTokens, TokenPriceFetchSource } from './type';
import { ChainType, CurrencyNotFound, Homa, Liquidity, SDKNotReady } from '..';
import { getMaxAvailableBalance } from './utils/get-max-available-balance';
import { MarketPriceProvider } from './price-provider/market-price-provider';
import { OraclePriceProvider } from './price-provider/oracle-price-provider';
import { PriceProvider, PriceProviderType } from './price-provider/types';
import { createTokenList } from './utils/create-token-list';
import { BaseSDK } from '../types';
import { createStorages } from './storages';
import tokenList from '../configs/token-list';
import { TokenProvider } from '../base-provider';
import { defaultTokenPriceFetchSource } from './price-provider/default-token-price-fetch-source-config';
import { subscribeDexShareTokenPrice } from './utils/get-dex-share-token-price';
import { getChainType } from '../utils/get-chain-type';

type PriceProviders = Partial<{
  [k in PriceProviderType]: PriceProvider;
}>;

export class Wallet implements BaseSDK, TokenProvider {
  private api: AnyApi;
  private priceProviders: PriceProviders;
  // readed from chain information
  private tokens$: BehaviorSubject<TokenRecord>;
  private isReady$: BehaviorSubject<boolean>;
  private storages: ReturnType<typeof createStorages>;
  private tokenPriceFetchSource: TokenPriceFetchSource;
  public consts!: WalletConsts;

  public constructor(
    api: AnyApi,
    tokenPriceFetchSource = defaultTokenPriceFetchSource,
    priceProviders?: Record<PriceProviderType, PriceProvider>
  ) {
    this.api = api;

    this.isReady$ = new BehaviorSubject<boolean>(false);
    this.tokens$ = new BehaviorSubject<TokenRecord>({});

    this.tokenPriceFetchSource = tokenPriceFetchSource;
    this.priceProviders = {
      ...this.defaultPriceProviders,
      ...priceProviders
    };
    this.storages = createStorages(this.api);

    this.init();
  }

  public get isReady(): Observable<boolean> {
    return this.isReady$.asObservable();
  }

  private init() {
    // 1. init constants
    this.initConsts();
    // 2. init tokens information
    this.initTokens();
  }

  private initConsts() {
    this.consts = {
      runtimeChain: this.api.runtimeChain.toString(),
      nativeCurrency: this.api.registry.chainTokens[0].toString()
    };
  }

  private get defaultPriceProviders(): PriceProviders {
    return {
      [PriceProviderType.MARKET]: new MarketPriceProvider(),
      [PriceProviderType.ORACLE]: new OraclePriceProvider(this.api)
    };
  }

  private initTokens() {
    const chainDecimals = this.api.registry.chainDecimals;
    const chainTokens = this.api.registry.chainTokens;
    const tradingPairs$ = this.storages.tradingPairs().observable;
    const assetMetadatas$ = this.storages.assetMetadatas().observable;

    const basicTokens = Object.fromEntries(
      chainTokens.map((token, i) => {
        const config = tokenList.getToken(token, this.consts.runtimeChain);

        return [
          token,
          new Token(token, {
            ...config,
            type: TokenType.BASIC,
            decimals: chainDecimals[i] ?? 12
          })
        ];
      })
    );

    // insert LCDOT if chain is acala
    if (getChainType(this.consts.runtimeChain) === ChainType.ACALA) {
      const name = createLiquidCroadloanName(13);

      basicTokens[name] = new Token(name, {
        decimals: basicTokens.DOT.decimals
      });
    }

    return combineLatest({
      tradingPairs: tradingPairs$,
      assetMetadatas: assetMetadatas$
    }).subscribe({
      next: ({ tradingPairs, assetMetadatas }) => {
        const list = createTokenList(basicTokens, tradingPairs, assetMetadatas);

        this.tokens$.next(list);
        this.isReady$.next(true);
      }
    });
  }

  /**
   *  @name subscribeTokens
   *  @param type
   *  @description subscirbe the token list, can filter by type
   */
  public subscribeTokens = memoize((type?: TokenType): Observable<TokenRecord> => {
    return this.isReady$.pipe(
      // wait sdk isReady
      filter((i) => i),
      switchMap(() => {
        return this.tokens$.pipe(
          map((data) => {
            if (!type) return data;

            return Object.fromEntries(
              Object.entries(data).filter(([, value]) => {
                return value.type === type;
              })
            );
          }),
          shareReplay(1)
        );
      })
    );
  });

  /**
   *  @name subscribeToken
   *  @description subscirbe the token info
   */
  public subscribeToken = memoize((target: MaybeCurrency): Observable<Token> => {
    const name = forceToCurrencyName(target);

    return this.subscribeTokens().pipe(
      map((all) => {
        const result = Object.values(all).find((item) => item.name === name);

        if (!result) throw new CurrencyNotFound(name);

        return result;
      })
    );
  });

  public getToken(target: MaybeCurrency): Token {
    const name = forceToCurrencyName(target);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.tokens$.value[name]!;
  }

  /**
   * @name subscribeBalance
   * @description subscribe `address` `token` balance info
   * @param token
   * @param address
   */
  public subscribeBalance = memoize((token: MaybeCurrency, address: string): Observable<BalanceData> => {
    return this.subscribeToken(token).pipe(
      switchMap((token) => {
        const { nativeCurrency } = this.consts;
        const isNativeToken = nativeCurrency === token.name;

        const handleNative = (data: AccountInfo, token: Token) => {
          const free = FN.fromInner(data.data.free.toString(), token.decimals);
          const locked = FN.fromInner(data.data.miscFrozen.toString(), token.decimals).max(
            FN.fromInner(data.data.feeFrozen.toString(), token.decimals)
          );
          const reserved = FN.fromInner(data.data.reserved.toString(), token.decimals);
          const available = free.sub(locked).max(FN.ZERO);

          return { available, token, free, locked, reserved };
        };

        const handleNonNative = (data: OrmlAccountData, token: Token) => {
          const free = FN.fromInner(data.free.toString(), token.decimals);
          const locked = FN.fromInner(data.frozen.toString(), token.decimals);
          const reserved = FN.fromInner(data.reserved.toString(), token.decimals);
          const available = free.sub(locked).max(FN.ZERO);

          return { available, token, free, locked, reserved };
        };

        if (isNativeToken) {
          const storage = this.storages.nativeBalance(address);

          return storage.observable.pipe(map((data) => handleNative(data, token)));
        }

        // nonNative token
        const storage = this.storages.nonNativeBalance(token, address);

        return storage.observable.pipe(map((data) => handleNonNative(data, token)));
      })
    );
  });

  /**
   * @name subscribeIssuance
   * @description subscribe `token` issuance amount
   * @param token
   */
  public subscribeIssuance = memoize((token: MaybeCurrency): Observable<FN> => {
    return this.subscribeToken(token).pipe(
      switchMap((token) => {
        const storage = this.storages.issuance(token);
        const handleIssuance = (data: Balance, token: Token) => FN.fromInner(data.toString(), token.decimals);

        return storage.observable.pipe(map((data) => handleIssuance(data, token)));
      })
    );
  });

  /**
   * @name subscribeSuggestInput
   * @description subscirbe the suggest input amount for `account` `token`
   * @params token: Token
   * @params account: string
   */
  public subscribeSuggestInput = memoize(
    (
      token: MaybeCurrency,
      address: string,
      isAllowDeath: boolean,
      paymentInfo: RuntimeDispatchInfo,
      feeFactor = 1
    ): Observable<FN> => {
      const handleNativeResult = (accountInfo: AccountInfo, token: Token, nativeToken: Token) => {
        const providers = accountInfo.providers.toNumber();
        const consumers = accountInfo.consumers.toNumber();
        const nativeFreeBalance = FN.fromInner(accountInfo.data.free.toString(), nativeToken.decimals);
        // native locked balance = max(accountInfo.data.miscFrozen, accountInfo.data.feeFrozen)
        const nativeLockedBalance = FN.fromInner(accountInfo.data.miscFrozen.toString(), nativeToken.decimals).max(
          FN.fromInner(accountInfo.data.feeFrozen.toString(), nativeToken.decimals)
        );
        const ed = this.getTransferConfig(token).ed;
        const fee = FN.fromInner(paymentInfo.partialFee.toString(), nativeToken.decimals).mul(new FN(feeFactor));

        return getMaxAvailableBalance({
          isNativeToken: true,
          isAllowDeath,
          providers,
          consumers,
          nativeFreeBalance,
          nativeLockedBalance,
          targetFreeBalance: FN.ZERO,
          targetLockedBalance: FN.ZERO,
          ed,
          fee
        });
      };

      const handleNonNativeResult = (
        accountInfo: AccountInfo,
        tokenInfo: OrmlAccountData,
        token: Token,
        nativeToken: Token
      ) => {
        const providers = accountInfo.providers.toNumber();
        const consumers = accountInfo.consumers.toNumber();
        const nativeFreeBalance = FN.fromInner(accountInfo.data.free.toString(), nativeToken.decimals);
        // native locked balance = max(accountInfo.data.miscFrozen, accountInfo.data.feeFrozen)
        const nativeLockedBalance = FN.fromInner(accountInfo.data.miscFrozen.toString(), nativeToken.decimals).max(
          FN.fromInner(accountInfo.data.feeFrozen.toString(), nativeToken.decimals)
        );
        const targetFreeBalance = FN.fromInner(tokenInfo.free.toString(), token.decimals);
        const targetLockedBalance = FN.fromInner(tokenInfo.frozen.toString(), token.decimals);
        const ed = this.getTransferConfig(token).ed;
        const fee = FN.fromInner(paymentInfo.partialFee.toString(), nativeToken.decimals).mul(new FN(feeFactor));

        return getMaxAvailableBalance({
          isNativeToken: false,
          isAllowDeath,
          providers,
          consumers,
          nativeFreeBalance,
          nativeLockedBalance,
          targetFreeBalance,
          targetLockedBalance,
          ed,
          fee
        });
      };

      return combineLatest({
        token: this.subscribeToken(token),
        nativeToken: this.subscribeToken(this.consts.nativeCurrency)
      }).pipe(
        switchMap(({ token, nativeToken }) => {
          const isNativeToken = forceToCurrencyName(token) === nativeToken.name;

          if (isNativeToken) {
            return this.storages
              .nativeBalance(address)
              .observable.pipe(map((data) => handleNativeResult(data, token, nativeToken)));
          }

          return combineLatest({
            accountInfo: this.storages.nativeBalance(address).observable,
            tokenInfo: this.storages.nonNativeBalance(token, address).observable
          }).pipe(
            map(({ accountInfo, tokenInfo }) => handleNonNativeResult(accountInfo, tokenInfo, token, nativeToken))
          );
        })
      );
    }
  );

  /**
   * @name getTransferConfig
   * @params get `currency` ed config
   * @param currency
   * @returns
   */
  public getTransferConfig(token: Token): TransferConfig {
    return { ed: token.ed };
  }

  public getPresetTokens(): PresetTokens {
    if (this.isReady$.value === false) {
      throw new SDKNotReady('wallet');
    }

    const tokens = this.tokens$.value;

    const data: PresetTokens = {
      nativeToken: tokens[forceToCurrencyName(this.consts.nativeCurrency)]
    };

    if (this.api.consts?.cdpEngine.getStableCurrencyId) {
      data.stableToken = tokens[forceToCurrencyName(this.api.consts.cdpEngine.getStableCurrencyId)];
    }

    data.liquidToken =
      tokens[
        // FIXME: need remove homaLite
        forceToCurrencyName(this.api.consts.homa?.liquidCurrencyId || this.api.consts.homaLite?.liquidCurrencyId || '')
      ];

    data.stakingToken =
      tokens[
        forceToCurrencyName(
          // FIXME: need remove homaLite
          this.api.consts.homa?.stakingCurrencyId || this.api.consts.homaLite?.stakingCurrencyId || ''
        )
      ];

    return data;
  }

  /**
   * @name subscribePrice
   * @description subscirbe the price of `token`
   */
  public subscribePrice = memoize((token: MaybeCurrency, type?: PriceProviderType): Observable<FN> => {
    let priceProvider: PriceProvider | undefined;
    const name = forceToCurrencyName(token);
    const isDexShare = isDexShareName(name);
    const presetTokens = this.getPresetTokens();
    const isLiquidToken = presetTokens?.liquidToken?.name === name;
    const stakingToken = presetTokens.stableToken;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const _type =
      type || this.tokenPriceFetchSource?.[getChainType(this.consts.runtimeChain)]?.[name] || PriceProviderType.MARKET;

    if (_type === PriceProviderType.MARKET) {
      priceProvider = this.priceProviders?.[PriceProviderType.MARKET];
    }

    if (_type === PriceProviderType.ORACLE) {
      priceProvider = this.priceProviders?.[PriceProviderType.ORACLE];
    }

    if (!priceProvider) return of(FN.ZERO);

    // should calculate dexShare price
    if (isDexShare) {
      const [token0, token1] = unzipDexShareName(name);

      return subscribeDexShareTokenPrice(
        this.subscribePrice(token0),
        this.subscribePrice(token1),
        new Liquidity(this.api, this).subscribePoolDetail(name)
      );
    }

    // should calculate liquidToken price
    if (isLiquidToken && stakingToken) {
      // create homa sd for get exchange rate
      return new Homa(this.api, this).subscribeConvertor().pipe(
        switchMap((convertor) => {
          return this.subscribePrice(stakingToken).pipe(map((price) => convertor.convertStakingToLiquid(price)));
        })
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.subscribeToken(token).pipe(switchMap((token) => priceProvider!.subscribe(token.name)));
  });
}