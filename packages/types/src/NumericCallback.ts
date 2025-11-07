import { type Callback } from './Callback'
import { type Numeric } from './Numeric'

export type BigIntCallback = NumericCallback<bigint>
export type NumberCallback = NumericCallback<number>
export type NumericCallback<T extends Numeric> = Callback<T>
