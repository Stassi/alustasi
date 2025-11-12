import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiplyBy } from '@repo/arithmetic/multiplication/multiplyCurried'
import { shiftRightCurried as shiftRightBy } from '@repo/bitwise/shiftRightCurried'
import { xorCurried as xor } from '@repo/bitwise/xorCurried'
import { pipe } from '@repo/composition/pipe'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type BigIntCallback } from '@repo/types/NumericCallback'

import { snapshot } from './snapshot'
import { type SplitMix64 } from './splitMix'

// noinspection JSUnusedGlobalSymbols
export const evolve: (state: bigint) => SplitMix64<bigint> = pipe([
  add(0x9e37_79b9_7f4a_7c15n),
  uInt64,
  (state: bigint): SplitMix64<bigint> =>
    snapshot({
      result: (
        [
          { multiplier: 0xbf58_476d_1ce4_e5b9n, shiftRightAmount: 30n },
          { multiplier: 0x94d0_49bb_1331_11ebn, shiftRightAmount: 27n },
          { multiplier: 1n, shiftRightAmount: 31n },
        ] as const
      )
        .map(({ shiftRightAmount, ...props }) => ({
          shiftRightXor: pipe([shiftRightBy(shiftRightAmount), xor]),
          ...props,
        }))
        .map(({ multiplier, shiftRightXor }) => ({
          shiftRightXorMultiply64: (prevState: bigint): BigIntCallback =>
            pipe([shiftRightXor(prevState), multiplyBy(multiplier), uInt64]),
        }))
        .reduce(
          (prevState: bigint, { shiftRightXorMultiply64 }): bigint =>
            shiftRightXorMultiply64(prevState)(prevState),
          state,
        ),
      state,
    }),
])
