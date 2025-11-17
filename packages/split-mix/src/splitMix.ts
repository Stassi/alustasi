import { type Seed64Input, seed64 } from '@repo/determinism/seed'
import { type Numeric } from '@repo/types/Numeric'

import { snapshot } from './snapshot'

export type SnapshotCurried<Result extends SnapshotResult = SplitMix64State> = (
  state: SplitMix64State,
) => SplitMix64<Result>

export type SnapshotProps<Result extends SnapshotResult> = Readonly<{
  result: Result
  state: SplitMix64State
}>

export type SnapshotResult = SplitMix64State | undefined

export type SplitMix64<Result extends SnapshotResult = SplitMix64State> =
  Readonly<
    Record<'back' | 'next', () => SplitMix64> &
      Record<'jump', (steps: Numeric) => SplitMix64> &
      SnapshotProps<Result>
  >

export type SplitMix64Props = Readonly<
  Partial<Record<'state', SnapshotResult>> & Record<'seed', Seed64Input>
>

export type SplitMix64State = bigint

// https://prng.di.unimi.it/splitmix64.c
export function splitMix64({ seed, state }: SplitMix64Props): SplitMix64 {
  return snapshot({
    result: undefined,
    state: state ?? seed64(seed),
  })
}
