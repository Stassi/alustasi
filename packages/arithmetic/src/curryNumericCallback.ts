import { type Numeric } from '@repo/types/Numeric'
import {
  type NumericCallbackBinary,
  type NumericCallbackCurried,
} from '@repo/types/NumericCallback'

export function curryNumericCallback<T extends Numeric>(
  fn: NumericCallbackBinary<T>,
): NumericCallbackCurried<T> {
  return (x: T) =>
    (y: T): T =>
      fn(x, y)
}
