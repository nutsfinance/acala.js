/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Wallet } from './index';
import { WsProvider } from '@polkadot/rpc-provider';
import { ApiPromise } from '@polkadot/api';
import { options } from '@acala-network/api';
import { TokenType } from '@acala-network/sdk-core';
import { PriceProviderType } from './price-provider/types';
import { WalletConfigs } from './type';

describe.skip('wallet', () => {
  let sdk: Wallet | undefined;

  jest.setTimeout(50000);

  const initSDK = async (configs?: Partial<WalletConfigs>, endpoint = 'wss://karura.api.onfinality.io/public-ws') => {
    if (sdk) return sdk;

    const provider = new WsProvider(endpoint);
    const api = await ApiPromise.create(options({ provider }));

    await api.isReady;

    const wallet = new Wallet(api, {
      wsProvider: provider,
      ...configs
    });

    await wallet.isReady;

    return wallet;
  };

  test('get token sould work', async () => {
    const sdk = await initSDK();

    const rmrk1 = await sdk.getToken('RMRK');
    const rmrk2 = await sdk.getToken('fa://0');
    const taiKSM1 = await sdk.getToken('taiKSM');
    const taiKSM2 = await sdk.getToken('sa://0');
    const taiKSM3 = await sdk.getToken('Taiga KSM');

    expect(rmrk1.symbol).toEqual('RMRK');
    expect(rmrk2.symbol).toEqual('RMRK');
    expect(rmrk1.decimals).toEqual(10);
    expect(rmrk2.decimals).toEqual(10);
    expect(taiKSM1.symbol).toEqual('taiKSM');
    expect(taiKSM2.symbol).toEqual('taiKSM');
    expect(taiKSM3.symbol).toEqual('taiKSM');
    expect(taiKSM1.decimals).toEqual(12);
    expect(taiKSM2.decimals).toEqual(12);
    expect(taiKSM3.decimals).toEqual(12);
  });

  test('get tokens should work', async () => {
    const sdk = await initSDK();

    const tokens1 = sdk.getTokens(TokenType.BASIC);
    const tokens2 = sdk.getTokens(TokenType.DEX_SHARE);
    const tokens3 = sdk.getTokens([TokenType.BASIC, TokenType.DEX_SHARE]);

    expect(Object.values(tokens1).length).not.toBe('KAR');
    expect(Object.values(tokens2).length).not.toBe(0);
    expect(Object.values(tokens3).length).toEqual(Object.values(tokens1).length + Object.values(tokens2).length);
  });

  test('get location should work', async () => {
    const sdk = await initSDK();

    const rmrk = await sdk.getToken('RMRK');
    const qtz = await sdk.getToken('QTZ');

    expect(rmrk.locations?.generalIndex).toBe(8);
    expect(rmrk.locations?.paraChainId).toBe(1000);
    expect(rmrk.locations?.palletInstance).toBe(50);
    expect(qtz.locations?.paraChainId).toBe(2095);
  });

  test('get aggregate price should work', async () => {
    const sdk = await initSDK();

    const price1 = await sdk.getPrice('KSM');
    const price2 = await sdk.getPrice('RMRK');
    const price3 = await sdk.getPrice('LKSM');
    const price4 = await sdk.getPrice('KINT');
    const price5 = await sdk.getPrice('QTZ');
    const price6 = await sdk.getPrice('MOVR');

    expect(price1.toString()).not.toBe('0');
    expect(price1.toString()).not.toBe(undefined);
    expect(price2.toString()).not.toBe('0');
    expect(price2.toString()).not.toBe(undefined);
    expect(price3.toString()).not.toBe('0');
    expect(price3.toString()).not.toBe(undefined);
    expect(price4.toString()).not.toBe('0');
    expect(price4.toString()).not.toBe(undefined);
    expect(price5.toString()).not.toBe('0');
    expect(price5.toString()).not.toBe(undefined);
    expect(price6.toString()).not.toBe('0');
    expect(price6.toString()).not.toBe(undefined);
  });

  test('get market price should work', async () => {
    const sdk = await initSDK();

    const price1 = await sdk.getPrice('KSM', PriceProviderType.MARKET);
    const price2 = await sdk.getPrice('RMRK', PriceProviderType.MARKET);
    const price3 = await sdk.getPrice('LKSM', PriceProviderType.MARKET);
    const price4 = await sdk.getPrice('KINT', PriceProviderType.MARKET);
    const price5 = await sdk.getPrice('QTZ', PriceProviderType.MARKET);
    const price6 = await sdk.getPrice('MOVR', PriceProviderType.MARKET);
    const price7 = await sdk.getPrice('taiKSM', PriceProviderType.MARKET);
    const price8 = await sdk.getPrice('PHA', PriceProviderType.MARKET);

    console.log(price8.toString());

    expect(price1.toString()).not.toBe('0');
    expect(price1.toString()).not.toBe(undefined);
    expect(price2.toString()).not.toBe('0');
    expect(price2.toString()).not.toBe(undefined);
    expect(price3.toString()).not.toBe('0');
    expect(price3.toString()).not.toBe(undefined);
    expect(price4.toString()).not.toBe('0');
    expect(price4.toString()).not.toBe(undefined);
    expect(price5.toString()).not.toBe('0');
    expect(price5.toString()).not.toBe(undefined);
    expect(price6.toString()).not.toBe('0');
    expect(price6.toString()).not.toBe(undefined);
    expect(price7.toString()).not.toBe('0');
    expect(price7.toString()).not.toBe(undefined);
    expect(price8.toString()).not.toBe('0');
    expect(price8.toString()).not.toBe(undefined);
  });

  test('get dex price should work', async () => {
    const sdk = await initSDK();

    const price1 = await sdk.getPrice('KSM', PriceProviderType.DEX);
    const price2 = await sdk.getPrice('RMRK', PriceProviderType.DEX);
    const price3 = await sdk.getPrice('LKSM', PriceProviderType.DEX);
    const price4 = await sdk.getPrice('BNC', PriceProviderType.DEX);
    const price5 = await sdk.getPrice('TAI', PriceProviderType.DEX);
    const price6 = await sdk.getPrice('PHA', PriceProviderType.DEX);

    console.log(price1.toString());
    console.log(price2.toString());
    console.log(price3.toString());
    console.log(price4.toString());
    console.log(price5.toString());
    console.log(price6.toString());

    expect(price1.toString()).not.toBe('0');
    expect(price1.toString()).not.toBe(undefined);
    expect(price2.toString()).not.toBe('0');
    expect(price2.toString()).not.toBe(undefined);
    expect(price3.toString()).not.toBe('0');
    expect(price3.toString()).not.toBe(undefined);
    expect(price4.toString()).not.toBe('0');
    expect(price4.toString()).not.toBe(undefined);
    expect(price5.toString()).not.toBe('0');
    expect(price5.toString()).not.toBe(undefined);
  });

  test('support ausd should work', async () => {
    const sdk0 = await initSDK({ supportAUSD: false });
    const sdk1 = await initSDK();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token0 = await sdk0.getToken('AUSD').catch((i) => (i as any).toString());
    const token1 = await sdk0.getToken('KUSD');
    const token2 = await sdk1.getToken('AUSD');
    const token3 = await sdk1.getToken('KUSD');

    expect(token0).toBe("CurrencyNotFound: can't find AUSD currency in current network");
    expect(token1.display).toBe('kUSD');
    expect(token2.display).toBe('aUSD');
    expect(token3.display).toBe('aUSD');
    expect(token2.symbol).toBe('KUSD');
    expect(token3.symbol).toBe('KUSD');
  });

  test('query balance should work', async () => {
    const sdk = await initSDK({}, 'wss://karura-dev.aca-dev.network/rpc/ws');

    const usdtBalance0 = await sdk.getBalance('USDT', '0x2804F43DDD8c08B66B61A1Cf8DcC744f1B109971');
    const usdtBalance1 = await sdk.getBalance('USDT', '5GREeQcGHt7na341Py6Y6Grr38KUYRvVoiFSiDB52Gt7VZiN');
    const usdtBalance2 = await sdk.getBalance('USDT', 'p62hgj46CwnVtZjP2MUAxLzoxG7SJdpFq5RYbBdy4SMzS9i');

    expect(usdtBalance0.free.toString()).not.toBe('0');
    expect(usdtBalance1.free.toString()).not.toBe('0');
    expect(usdtBalance2.free.toString()).not.toBe('0');
  });
});
