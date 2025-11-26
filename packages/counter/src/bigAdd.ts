import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallback } from '@repo/types/NumericCallback'

export const bigAdd: (steps: Numeric) => NumericCallback<Numeric> = pipe([
  BigInt,
  add,
])
