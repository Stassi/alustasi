import { add } from '@repo/arithmetic/addition/add'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { type Numeric } from '@repo/types/Numeric'

import { type Counter, type CounterState } from './counter'
import { stepBackward, stepBy, stepForward } from './step'

export type CounterSnapshotCurried = (state: CounterState) => Counter

export const snapshot: (stateNumeric: Numeric) => Counter = pipe([
  BigInt,
  (state: CounterState): Counter => ({
    back: (): Counter => stepBackward(state),
    jump: (steps: Numeric): Counter => stepBy({ state, steps }),
    next: (): Counter => stepForward(state),
    result: state,
    state,
  }),
])

export const addSnapshot: (x: Numeric, y: Numeric) => Counter = pipe([
  add,
  snapshot,
])
