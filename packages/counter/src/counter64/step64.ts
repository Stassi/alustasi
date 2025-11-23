import { type Numeric } from '@repo/types/Numeric'

import { type Counter64, type Counter64State } from './counter64'
import { type Counter64SnapshotCurried, addSnapshot64 } from './snapshot64'

export function stepBy64({
  state,
  steps,
}: Readonly<
  Record<'state', Counter64State> & Record<'steps', Numeric>
>): Counter64 {
  return addSnapshot64(state, BigInt(steps))
}

function stepCurried64(steps: Numeric): Counter64SnapshotCurried {
  return (state: Counter64State): Counter64 => stepBy64({ state, steps })
}

export const stepForward64: Counter64SnapshotCurried = stepCurried64(1)
export const stepBackward64: Counter64SnapshotCurried = stepCurried64(-1)
