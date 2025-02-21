import { FixedPointNumber, Token } from '@acala-network/sdk-core';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenProvider } from '../../base-provider';
import { PoolPositions } from '../types';

export function calcDexPriceAndAmountFormPool(
  target: Token,
  detail: PoolPositions,
  tokenProvider: TokenProvider
): Observable<[FixedPointNumber, FixedPointNumber]> {
  const [token0, token1] = detail.info.pair;
  const [amount0, amount1] = detail.amounts;
  const baseToken = target.isEqual(token0) ? token1 : token0;

  if (!tokenProvider.subscribePrice) return of([target.isEqual(token0) ? amount0 : amount1, FixedPointNumber.ZERO]);

  return tokenProvider.subscribePrice(baseToken).pipe(
    map((price) => {
      const rate = target.isEqual(token0) ? amount1.div(amount0) : amount0.div(amount1);

      return [target.isEqual(token0) ? amount0 : amount1, price.mul(rate)];
    })
  );
}

export function calcDexPrice(
  target: Token,
  details: PoolPositions[],
  tokenProvider: TokenProvider
): Observable<FixedPointNumber> {
  return combineLatest(details.map((i) => calcDexPriceAndAmountFormPool(target, i, tokenProvider))).pipe(
    map((prices) => {
      const zero = new FixedPointNumber(0, target.decimals);
      const total = prices.reduce((acc, cur) => acc.add(cur[0]), zero);
      const weightAveragePrice = prices.reduce((acc, cur) => acc.add(cur[1].mul(cur[0].div(total))), zero);

      return weightAveragePrice;
    })
  );
}
