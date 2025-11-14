import { type Numeric } from '@repo/types/Numeric'

import { evolve, evolveOnce } from './evolve'
import { type SnapshotProps, type SplitMix64 } from './splitMix'

export function snapshot<Result extends bigint | undefined>({
  state,
  ...rest
}: SnapshotProps<Result>): SplitMix64<Result> {
  return {
    jump: (steps: Numeric): SplitMix64<bigint> => evolve({ state, steps }),
    next: (): SplitMix64<bigint> => evolveOnce(state),
    state,
    ...rest,
  }
}
