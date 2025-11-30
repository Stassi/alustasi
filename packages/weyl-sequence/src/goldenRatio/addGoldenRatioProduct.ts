import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallback } from '@repo/types/NumericCallback'

import { goldenRatio64 } from './goldenRatio64'

export const addGoldenRatioProduct: (
  steps: Numeric,
) => NumericCallback<Numeric> = pipe([BigInt, multiply(goldenRatio64), add])
