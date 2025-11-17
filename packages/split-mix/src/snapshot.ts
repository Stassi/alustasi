import { type Numeric } from '@repo/types/Numeric'

import {
  type SnapshotCurried,
  type SnapshotProps,
  type SnapshotResult,
  type SplitMix64,
  type SplitMix64State,
} from './splitMix'
import { stepBackward, stepBy, stepForward } from './step'

export function snapshot<Result extends SnapshotResult>({
  state,
  ...rest
}: SnapshotProps<Result>): SplitMix64<Result> {
  return {
    back: (): SplitMix64 => stepBackward(state),
    jump: (steps: Numeric): SplitMix64 => stepBy({ state, steps }),
    next: (): SplitMix64 => stepForward(state),
    state,
    ...rest,
  }
}

export function snapshotCurried<Result extends SnapshotResult>(
  result: Result,
): SnapshotCurried<Result> {
  return (state: SplitMix64State): SplitMix64<Result> =>
    snapshot({ result, state })
}
