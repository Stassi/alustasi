import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallback } from '@repo/types/NumericCallback'

export const addWeylProduct: (steps: Numeric) => NumericCallback<Numeric> =
  pipe([
    pipe([
      BigInt,
      (steps: bigint): bigint => {
        if (steps === 0n) throw new RangeError('Steps must be non-zero')
        return steps
      },
      multiply(0x9e37_79b9_7f4a_7c15n),
    ]) as NumericCallback<Numeric>,
    add,
  ])
