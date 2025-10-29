export type BigIntCallback = NumericCallback<bigint>
export type NumberCallback = NumericCallback<number>
export type Numeric = bigint | number
export type NumericCallback<T extends Numeric> = (n: T) => T
