import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiplyBy } from '@repo/arithmetic/multiplication/multiplyCurried'
import { shiftRightCurried as shiftRightBy } from '@repo/bitwise/shiftRightCurried'
import { xorCurried as xor } from '@repo/bitwise/xorCurried'
import { pipe } from '@repo/composition/pipe'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'

import { snapshot } from './snapshot'
import { type SplitMix64 } from './splitMix'

export const evolve: (state: bigint) => SplitMix64<bigint> = pipe([
  add(0x9e37_79b9_7f4a_7c15n),
  uInt64,
  (state: bigint) =>
    snapshot({
      result: (
        [
          { multiplier: 0xbf58_476d_1ce4_e5b9n, shiftRightAmount: 30n },
          { multiplier: 0x94d0_49bb_1331_11ebn, shiftRightAmount: 27n },
          { multiplier: 1n, shiftRightAmount: 31n },
        ] as const
      )
        .map(({ multiplier, shiftRightAmount }) => ({
          multiply: multiplyBy(multiplier),
          shiftRightXor: pipe([shiftRightBy(shiftRightAmount), xor]),
        }))
        .reduce(
          (prevState: bigint, { multiply, shiftRightXor }): bigint =>
            pipe([shiftRightXor(prevState), multiply, uInt64])(prevState),
          state,
        ),
      state,
    }),
])
