import { add } from '@repo/arithmetic/addition/add'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import { type Counter64, type Counter64State } from './counter64'
import { stepBackward64, stepBy64, stepForward64 } from './step64'

export type Counter64SnapshotCurried = (state: Counter64State) => Counter64

export const snapshot64: (stateNumeric: Numeric) => Counter64 = pipe([
  uInt64,
  (state: Counter64State): Counter64 => ({
    back: (): Counter64 => stepBackward64(state),
    jump: (steps: Numeric): Counter64 => stepBy64({ state, steps }),
    next: (): Counter64 => stepForward64(state),
    result: state,
    state,
  }),
])

export const addSnapshot64: (x: Numeric, y: Numeric) => Counter64 = pipe([
  add,
  snapshot64,
])
