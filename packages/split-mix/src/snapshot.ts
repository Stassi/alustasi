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
    back: (): SplitMix64<SplitMix64State> => stepBackward(state),
    jump: (steps: Numeric): SplitMix64<SplitMix64State> =>
      stepBy({ state, steps }),
    next: (): SplitMix64<SplitMix64State> => stepForward(state),
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
