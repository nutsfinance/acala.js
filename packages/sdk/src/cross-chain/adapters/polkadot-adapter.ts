import { AnyApi, FixedPointNumber } from '@acala-network/sdk-core';
import { TokenBalance } from '@acala-network/sdk/types';
import { CurrencyNotFound } from '../../wallet/errors';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { ISubmittableResult } from '@polkadot/types/types';
import { combineLatest, map, Observable, of } from 'rxjs';
import { KusamaBalanceAdapter } from '../balance-adapter/kusama';
import { BaseCrossChainAdapter } from '../base-chain-adapter';
import { chains, RegisteredChain } from '../configs/chains';
import { Chain, CrossChainRouter, CrossChainTransferParams } from '../types';

interface PolkadotAdapterConfigs {
  api: AnyApi;
}

const crossChainFeeConfigs: Record<string, string> = {
  KSM: '106666660',
  DOT: '106666660'
};

class BasePolkadotAdapter extends BaseCrossChainAdapter {
  private balanceAdapter: KusamaBalanceAdapter;
  constructor(configs: PolkadotAdapterConfigs, chain: Chain, routers: Omit<CrossChainRouter, 'from'>[]) {
    super(configs.api, chain, routers);
    this.balanceAdapter = new KusamaBalanceAdapter({ api: configs.api });
  }

  public subscribeAvailableBalance(token: string, address: string): Observable<FixedPointNumber> {
    return this.balanceAdapter.subscribeBalance(token, address).pipe(map((i) => i.available));
  }

  public subscribeMaxInput(token: string, address: string, to: RegisteredChain): Observable<FixedPointNumber> {
    return combineLatest({
      txFee: this.measureTransferFee({
        amount: FixedPointNumber.ZERO,
        to,
        token,
        address
      }),
      balance: this.balanceAdapter.subscribeBalance(token, address).pipe(map((i) => i.available))
    }).pipe(
      map(({ txFee, balance }) => {
        const feeFactor = 0.02;
        const fee = FixedPointNumber.fromInner(txFee, this.balanceAdapter.decimals).mul(
          new FixedPointNumber(feeFactor)
        );

        return balance.minus(fee);
      })
    );
  }

  public subscribeMinInput(token: string): Observable<FixedPointNumber> {
    return of(this.balanceAdapter.getED(token).add(this.getCrossChainFee(token)?.balance || FixedPointNumber.ZERO));
  }

  public getCrossChainFee(token: string): TokenBalance {
    return {
      token: 'KSM',
      balance: FixedPointNumber.fromInner(crossChainFeeConfigs[token] ?? '0', this.balanceAdapter.decimals)
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public getCrossChainTokenDecimals(_token: string): number {
    // ignore the token params for only KSM/DOT
    return this.balanceAdapter.decimals;
  }

  public createTx(
    params: CrossChainTransferParams
  ): SubmittableExtrinsic<'promise', ISubmittableResult> | SubmittableExtrinsic<'rxjs', ISubmittableResult> {
    const { to, token, address, amount } = params;
    const toChain = chains[to];

    if (token !== this.balanceAdapter.nativeToken) throw new CurrencyNotFound(token);

    const accountId = this.api.createType('AccountId32', address).toHex();
    const tx = this.api.tx.xcmPallet.reserveTransferAssets;
    const dst = { X1: { ParaChain: toChain.paraChainId }, parents: 0 };
    const acc = { X1: { AccountId32: { id: accountId, network: 'Any' } } };
    const ass = [{ ConcreteFungible: { amount: amount.toChainData() } }];
    const callParams = [{ V0: dst }, { V0: acc }, { V0: ass }, 0];

    return tx(...callParams);
  }
}

export class PolkadotAdapter extends BasePolkadotAdapter {
  constructor(configs: PolkadotAdapterConfigs) {
    super(configs, chains.polkadot, [{ to: chains.acala, token: 'DOT' }]);
  }
}

export class KusamaAdapter extends BasePolkadotAdapter {
  constructor(configs: PolkadotAdapterConfigs) {
    super(configs, chains.kusama, [{ to: chains.karura, token: 'KSM' }]);
  }
}
