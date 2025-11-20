import { type Numeric } from '@repo/types/Numeric'

import { type SplitMix64, type SplitMix64State } from './splitMix'
import { stepBackward, stepBy, stepForward } from './step'

export type SplitMix64SnapshotCurried<
  Result extends SplitMix64SnapshotResult = SplitMix64State,
> = (state: SplitMix64State) => SplitMix64<Result>

export type SplitMix64SnapshotProps<
  Result extends SplitMix64SnapshotResult = SplitMix64State,
> = Readonly<{
  result: Result
  state: SplitMix64State
}>

export type SplitMix64SnapshotResult = SplitMix64State | undefined

export function snapshot<
  Result extends SplitMix64SnapshotResult = SplitMix64State,
>({ state, ...rest }: SplitMix64SnapshotProps<Result>): SplitMix64<Result> {
  return {
    back: (): SplitMix64 => stepBackward(state),
    jump: (steps: Numeric): SplitMix64 => stepBy({ state, steps }),
    next: (): SplitMix64 => stepForward(state),
    state,
    ...rest,
  }
}

export function snapshotCurried<
  Result extends SplitMix64SnapshotResult = SplitMix64State,
>(result: Result): SplitMix64SnapshotCurried<Result> {
  return (state: SplitMix64State): SplitMix64<Result> =>
    snapshot({ result, state })
}
