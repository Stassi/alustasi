import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallback } from '@repo/types/NumericCallback'

export const addWeylProduct: (steps: Numeric) => NumericCallback<Numeric> =
  pipe([BigInt, multiply(0x9e37_79b9_7f4a_7c15n), add])
