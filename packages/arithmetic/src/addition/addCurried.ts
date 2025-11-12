import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallbackCurried } from '@repo/types/NumericCallback'

import { curryNumericCallback } from '../curryNumericCallback'
import { add } from './add'

export const addCurried: NumericCallbackCurried<Numeric> =
  curryNumericCallback(add)
