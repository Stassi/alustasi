import { type Numeric } from '@repo/types/Numeric'

import {
  type SnapshotCurried,
  type SnapshotProps,
  type SnapshotResult,
  type SplitMix64,
} from './splitMix'
import { stepBackward, stepBy, stepForward } from './step'

export function snapshot<Result extends SnapshotResult>({
  state,
  ...rest
}: SnapshotProps<Result>): SplitMix64<Result> {
  return {
    back: (): SplitMix64<bigint> => stepBackward(state),
    jump: (steps: Numeric): SplitMix64<bigint> => stepBy({ state, steps }),
    next: (): SplitMix64<bigint> => stepForward(state),
    state,
    ...rest,
  }
}

export function snapshotCurried<Result extends SnapshotResult>(
  result: Result,
): SnapshotCurried<Result> {
  return (state: bigint): SplitMix64<Result> => snapshot({ result, state })
}
