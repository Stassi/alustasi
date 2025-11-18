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
