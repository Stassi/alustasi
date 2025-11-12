import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallbackCurried } from '@repo/types/NumericCallback'

import { curryNumericCallback } from '../curryNumericCallback'
import { multiply } from './multiply'

export const multiplyCurried: NumericCallbackCurried<Numeric> =
  curryNumericCallback(multiply)
