import { type Numeric } from '@repo/types/Numeric'

import { type Counter, type CounterState } from './counter'
import { type CounterSnapshotCurried, addSnapshot } from './snapshot'

export function stepBy({
  state,
  steps,
}: Readonly<
  Record<'state', CounterState> & Record<'steps', Numeric>
>): Counter {
  return addSnapshot(state, BigInt(steps))
}

function stepCurried(steps: Numeric): CounterSnapshotCurried {
  return (state: CounterState): Counter => stepBy({ state, steps })
}

export const stepForward: CounterSnapshotCurried = stepCurried(1)
export const stepBackward: CounterSnapshotCurried = stepCurried(-1)
