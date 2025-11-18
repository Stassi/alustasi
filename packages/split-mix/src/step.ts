import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { shiftRightCurried as shiftRight } from '@repo/bitwise/shiftRightCurried'
import { xorCurried as xor } from '@repo/bitwise/xorCurried'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { reduceApply } from '@repo/combinatorics/reduceApply'
import { wCurried as w } from '@repo/combinatorics/w/wCurried'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'
import { type BigIntCallback } from '@repo/types/NumericCallback'

import { addWeylProduct } from './addWeylProduct'
import { type SnapshotCurried, snapshotCurried as snapshot } from './snapshot'
import { type SplitMix64, type SplitMix64State } from './splitMix'

const stepCurried = (steps: Numeric): SnapshotCurried =>
  pipe([
    addWeylProduct(steps),
    uInt64,
    w(
      pipe([
        reduceApply(
          (
            [
              { multiplier: 0xbf58_476d_1ce4_e5b9n, shiftRightAmount: 30n },
              { multiplier: 0x94d0_49bb_1331_11ebn, shiftRightAmount: 27n },
              { multiplier: 1n, shiftRightAmount: 31n },
            ] as const
          )
            .map(({ shiftRightAmount, ...props }) => ({
              shiftRightXor: pipe([shiftRight(shiftRightAmount), xor]),
              ...props,
            }))
            .map(
              ({ multiplier, shiftRightXor }): BigIntCallback =>
                w(
                  (state: SplitMix64State): BigIntCallback =>
                    pipe([shiftRightXor(state), multiply(multiplier), uInt64]),
                ),
            ),
        ) as BigIntCallback,
        snapshot,
      ]),
    ) as SnapshotCurried,
  ])

export const stepForward: SnapshotCurried = stepCurried(1)
export const stepBackward: SnapshotCurried = stepCurried(-1)

export function stepBy({
  state,
  steps,
}: Record<'state', SplitMix64State> & Record<'steps', Numeric>): SplitMix64 {
  return stepCurried(steps)(state)
}
