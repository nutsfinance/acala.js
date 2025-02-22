import {
  Chain,
  CrossChainRouter,
  CrossChainInputConfigs,
  CrossChainTransferParams,
  CrossChianBalanceChangedConfigs,
  BalanceChangedStatus
} from './types';
import { RegisteredChain } from './configs/chains';
import { AnyApi, FixedPointNumber } from '@acala-network/sdk-core';
import { of, combineLatest, Observable, timeout, TimeoutError, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { TokenBalance } from '../types';
import { ISubmittableResult } from '@polkadot/types/types';

const DEFAULT_TX_CHECKING_TIMEOUT = 2 * 60 * 1000;

export abstract class BaseCrossChainAdapter {
  protected routers: Omit<CrossChainRouter, 'from'>[];
  protected api!: AnyApi;
  readonly chain: Chain;
  private findAdapter!: (chain: Chain | RegisteredChain) => BaseCrossChainAdapter;

  constructor(api: AnyApi, chain: Chain, routers: Omit<CrossChainRouter, 'from'>[]) {
    this.api = api;
    this.chain = chain;
    this.routers = routers;
  }

  public injectFindAdapter(func: (chain: RegisteredChain | Chain) => BaseCrossChainAdapter): void {
    this.findAdapter = func;
  }

  public getRouters(): CrossChainRouter[] {
    return this.routers.map((i) => ({ ...i, from: this.chain }));
  }

  public getSS58Prefix(): number {
    return Number(this.api.registry.chainSS58?.toString());
  }

  public subscribeInputConfigs(params: Omit<CrossChainTransferParams, 'amount'>): Observable<CrossChainInputConfigs> {
    const { to, token, address } = params;
    const toAdapter = this.findAdapter(to);

    // subscribe destination min receive
    const crossChainFee = toAdapter.getCrossChainFee(token);
    const minInput$ = toAdapter.subscribeMinInput(token);
    const maxInput$ = this.subscribeMaxInput(token, address, to);

    return combineLatest({
      minInput: minInput$,
      maxInput: maxInput$
    }).pipe(
      map(({ minInput, maxInput }) => {
        return {
          minInput,
          maxInput,
          ss58Prefix: toAdapter.getSS58Prefix(),
          destCrossChainFee: crossChainFee,
          tokenDecimals: toAdapter.getCrossChainTokenDecimals(token)
        };
      })
    );
  }

  protected measureTransferFee(params: CrossChainTransferParams) {
    let tx = this.createTx({ ...params });

    if (this.api.type === 'rxjs') {
      tx = tx as SubmittableExtrinsic<'rxjs', ISubmittableResult>;

      return tx.paymentInfo(params.address).pipe(
        map((feeData) => {
          return feeData.partialFee.toString();
        })
      );
    }

    // for promise api
    tx = tx as SubmittableExtrinsic<'promise', ISubmittableResult>;

    return from(
      (async () => {
        const feeData = await tx.paymentInfo(params.address);

        return feeData.partialFee.toString();
      })()
    );
  }

  public subscribeBalanceChanged(configs: CrossChianBalanceChangedConfigs): Observable<BalanceChangedStatus> {
    const { token, address, amount, tolerance } = configs;
    // allow 1% tolerance as default
    const target = amount.mul(new FixedPointNumber(1 - (tolerance || 0.01)));

    let savedBalance: FixedPointNumber | undefined;

    return this.subscribeAvailableBalance(token, address).pipe(
      timeout(configs.timeout || DEFAULT_TX_CHECKING_TIMEOUT),
      map((balance) => {
        if (!savedBalance) {
          savedBalance = balance;
        }

        const diff = balance.minus(savedBalance);

        if (savedBalance && diff.gte(target)) {
          return BalanceChangedStatus.SUCCESS;
        }

        return BalanceChangedStatus.CHECKING;
      }),
      catchError((e: Error) => {
        if (e instanceof TimeoutError) {
          return of(BalanceChangedStatus.TIMEOUT);
        }

        return of(BalanceChangedStatus.UNKNOWN_ERROR);
      })
    );
  }

  public abstract subscribeAvailableBalance(token: string, address: string): Observable<FixedPointNumber>;
  public abstract subscribeMinInput(token: string): Observable<FixedPointNumber>;
  public abstract subscribeMaxInput(token: string, address: string, to: RegisteredChain): Observable<FixedPointNumber>;
  public abstract getCrossChainFee(token: string): TokenBalance;
  public abstract getCrossChainTokenDecimals(token: string): number;
  public abstract createTx(
    params: CrossChainTransferParams
  ): SubmittableExtrinsic<'promise', ISubmittableResult> | SubmittableExtrinsic<'rxjs', ISubmittableResult>;
}
