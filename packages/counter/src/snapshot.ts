import { add } from '@repo/arithmetic/addition/add'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import { type Counter, type CounterState } from './counter'
import {
  stepBackward,
  stepBackward64,
  stepBy,
  stepBy64,
  stepForward,
  stepForward64,
} from './step'

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

export const snapshot64: (stateNumeric: Numeric) => Counter = pipe([
  uInt64,
  (state: CounterState): Counter => ({
    back: (): Counter => stepBackward64(state),
    jump: (steps: Numeric): Counter => stepBy64({ state, steps }),
    next: (): Counter => stepForward64(state),
    result: state,
    state,
  }),
])

export const addSnapshot64: (x: Numeric, y: Numeric) => Counter = pipe([
  add,
  snapshot64,
])
