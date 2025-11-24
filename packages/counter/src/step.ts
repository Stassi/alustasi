import { type Numeric } from '@repo/types/Numeric'

import { type Counter, type CounterState } from './counter'
import {
  type CounterSnapshotCurried,
  addSnapshot,
  addSnapshot64,
} from './snapshot'

type StepByProps = Readonly<
  Record<'state', CounterState> & Record<'steps', Numeric>
>

export function stepBy({ state, steps }: StepByProps): Counter {
  return addSnapshot(state, BigInt(steps))
}

export function stepBy64({ state, steps }: StepByProps): Counter {
  return addSnapshot64(state, BigInt(steps))
}

function stepCurried(steps: Numeric): CounterSnapshotCurried {
  return (state: CounterState): Counter => stepBy({ state, steps })
}

function stepCurried64(steps: Numeric): CounterSnapshotCurried {
  return (state: CounterState): Counter => stepBy64({ state, steps })
}

export const stepForward: CounterSnapshotCurried = stepCurried(1)
export const stepBackward: CounterSnapshotCurried = stepCurried(-1)

export const stepForward64: CounterSnapshotCurried = stepCurried64(1)
export const stepBackward64: CounterSnapshotCurried = stepCurried64(-1)
