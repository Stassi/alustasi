import { type Callback } from '@repo/types/Callback'

export type Reduce<T, R> = (
  previousValue: R,
  currentValue: T,
  currentIndex: number,
  arr: readonly T[],
) => R

export function reduce<T, R>({
  arr,
  fn,
  initialValue,
}: {
  arr: readonly T[]
  fn: Reduce<T, R>
  initialValue: R
}): R {
  return arr.reduce(fn, initialValue)
}

export function reduceCurried<T, R>(props: {
  arr: readonly T[]
  fn: Reduce<T, R>
}): Callback<R> {
  return (initialValue: R): R =>
    reduce<T, R>({
      ...props,
      initialValue,
    })
}
