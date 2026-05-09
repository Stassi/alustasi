export type SwapCurried<X, Y, R> = (x: X) => (y: Y) => R

export const c =
  <X, Y, R>(f: SwapCurried<X, Y, R>): SwapCurried<Y, X, R> =>
  (y: Y) =>
  (x: X): R =>
    f(x)(y)
