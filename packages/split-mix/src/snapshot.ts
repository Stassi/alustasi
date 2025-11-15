import { type Numeric } from '@repo/types/Numeric'

import { type SnapshotProps, type SplitMix64 } from './splitMix'
import { stepBackward, stepBy, stepForward } from './step'

export function snapshot<Result extends bigint | undefined>({
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
