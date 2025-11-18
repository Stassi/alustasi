import { type Callback } from '@repo/types/Callback'

import { type Reduce, reduce } from './reduce'

export function reduceCurried<T, R>(
  fn: Reduce<T, R>,
): (arr: readonly T[]) => Callback<R> {
  return (arr: readonly T[]): Callback<R> =>
    (initialValue: R): R =>
      reduce<T, R>({
        arr,
        fn,
        initialValue,
      })
}
