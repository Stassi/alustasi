import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { shiftRightCurried as shiftRight } from '@repo/bitwise/shiftRightCurried'
import { xorCurried as xor } from '@repo/bitwise/xorCurried'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { reduceCurried as reduce } from '@repo/combinatorics/reduce'
import { wCurried as w } from '@repo/combinatorics/w/wCurried'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'
import { type BigIntCallback } from '@repo/types/NumericCallback'

import { addWeylProduct } from './addWeylProduct'
import { snapshotCurried as snapshot } from './snapshot'
import { type SnapshotCurried, type SplitMix64 } from './splitMix'

const stepCurried = (steps: Numeric): SnapshotCurried =>
  pipe([
    addWeylProduct(steps),
    uInt64,
    w(
      pipe([
        reduce({
          arr: (
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
                  (prevState: bigint): BigIntCallback =>
                    pipe([
                      shiftRightXor(prevState),
                      multiply(multiplier),
                      uInt64,
                    ]),
                ),
            ),
          fn: (
            prevState: bigint,
            wShiftRightXorMultiply64: BigIntCallback,
          ): bigint => wShiftRightXorMultiply64(prevState),
        }) as BigIntCallback,
        snapshot<bigint>,
      ]),
    ) as SnapshotCurried,
  ])

export const stepForward: SnapshotCurried = stepCurried(1)
export const stepBackward: SnapshotCurried = stepCurried(-1)

export function stepBy({
  state,
  steps,
}: {
  state: bigint
  steps: Numeric
}): SplitMix64 {
  return stepCurried(steps)(state)
}
