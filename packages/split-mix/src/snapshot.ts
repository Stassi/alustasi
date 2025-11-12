import { evolve } from './evolve'
import { type SnapshotProps, type SplitMix64 } from './splitMix'

export function snapshot<Result extends bigint | undefined>({
  state,
  ...rest
}: SnapshotProps<Result>): SplitMix64<Result> {
  return {
    next: (): SplitMix64<bigint> => evolve(state),
    state,
    ...rest,
  }
}
