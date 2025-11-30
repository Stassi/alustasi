import { pipe } from '@repo/combinatorics/pipe/pipe'
import { wCurried as w } from '@repo/combinatorics/w/wCurried'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import { stepBackward, stepBy, stepForward } from './step'
import { type WeylSequence64, type WeylSequence64State } from './weylSequence64'

export type WeylSequence64Snapshot = (n: Numeric) => WeylSequence64

export type WeylSequence64SnapshotCurried = (
  state: WeylSequence64State,
) => WeylSequence64

export const snapshot: WeylSequence64Snapshot = pipe([
  uInt64,
  w<WeylSequence64State, WeylSequence64>(
    (state: WeylSequence64State): WeylSequence64SnapshotCurried =>
      (result: WeylSequence64State): WeylSequence64 => ({
        back: (): WeylSequence64 => stepBackward(state),
        jump: (steps: Numeric): WeylSequence64 => stepBy({ state, steps }),
        next: (): WeylSequence64 => stepForward(state),
        result,
        state,
      }),
  ),
])
