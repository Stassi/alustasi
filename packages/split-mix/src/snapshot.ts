import { evolve } from './evolve'
import { type SplitMix64 } from './splitMix'

export function snapshot<Result extends bigint | undefined>({
  state,
  ...rest
}: Readonly<{
  result: Result
  state: bigint
}>): SplitMix64<Result> {
  return {
    next: (): SplitMix64<bigint> => evolve(state),
    state,
    ...rest,
  }
}
