import { type Numeric } from '@repo/types/Numeric'

import { type Counter64, type Counter64State } from './counter64'
import { type Counter64SnapshotCurried, addSnapshot } from './snapshot'

export function stepBy({
  state,
  steps,
}: Readonly<
  Record<'state', Counter64State> & Record<'steps', Numeric>
>): Counter64 {
  return addSnapshot(state, BigInt(steps))
}

function stepCurried(steps: Numeric): Counter64SnapshotCurried {
  return (state: Counter64State): Counter64 => stepBy({ state, steps })
}

export const stepForward: Counter64SnapshotCurried = stepCurried(1)
export const stepBackward: Counter64SnapshotCurried = stepCurried(-1)
