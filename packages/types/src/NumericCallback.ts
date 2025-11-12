import { type Callback, type CallbackBinary } from './Callback'
import { type Numeric } from './Numeric'

export type BigIntCallback = NumericCallback<bigint>
export type NumberCallback = NumericCallback<number>
export type NumericCallback<T extends Numeric> = Callback<T>
export type NumericCallbackBinary<T extends Numeric> = CallbackBinary<T>
export type NumericCallbackCurried<T extends Numeric> = (
  x: T,
) => NumericCallback<T>
