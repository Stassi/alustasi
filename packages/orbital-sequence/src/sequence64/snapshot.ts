import { pipe } from '@repo/combinatorics/pipe/pipe'
import { wCurried as w } from '@repo/combinatorics/w/wCurried'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import { type Sequence64, type Sequence64State } from './sequence64'
import { stepBackward, stepBy, stepForward } from './step'

export type Sequence64Snapshot = (n: Numeric) => Sequence64

export type Sequence64SnapshotCurried = (state: Sequence64State) => Sequence64

export const snapshot: Sequence64Snapshot = pipe([
  uInt64,
  w<Sequence64State, Sequence64>(
    (state: Sequence64State): Sequence64SnapshotCurried =>
      (result: Sequence64State): Sequence64 => ({
        back: (): Sequence64 => stepBackward(state),
        jump: (steps: Numeric): Sequence64 => stepBy({ state, steps }),
        next: (): Sequence64 => stepForward(state),
        result,
        state,
      }),
  ),
])
