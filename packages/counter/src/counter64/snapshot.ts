import { add } from '@repo/arithmetic/addition/add'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import { type Counter64, type Counter64State } from './counter64'
import { stepBackward, stepBy, stepForward } from './step'

export type Counter64SnapshotCurried = (state: Counter64State) => Counter64

export const snapshot: (stateNumeric: Numeric) => Counter64 = pipe([
  uInt64,
  (state: Counter64State): Counter64 => ({
    back: (): Counter64 => stepBackward(state),
    jump: (steps: Numeric): Counter64 => stepBy({ state, steps }),
    next: (): Counter64 => stepForward(state),
    result: state,
    state,
  }),
])

export const addSnapshot: (x: Numeric, y: Numeric) => Counter64 = pipe([
  add,
  snapshot,
])
