export type BigIntCallback = NumericCallback<bigint>
export type NumberCallback = NumericCallback<number>
export type Numeric = bigint | number
export type NumericCallback<T extends Numeric> = (n: T) => T

export function add(a: number, b: number): number
export function add(a: bigint, b: bigint): bigint
export function add(a: Numeric, b: Numeric): Numeric {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  if (typeof a === 'bigint' && typeof b === 'bigint') return a + b
  throw new TypeError('Addition parameters must be of the same type')
}

export function addCurried(a: number): NumberCallback
export function addCurried(a: bigint): BigIntCallback
export function addCurried(a: Numeric): BigIntCallback | NumberCallback {
  if (typeof a === 'bigint') return (b: bigint): bigint => add(a, b)
  else return (b: number): number => add(a, b)
}
