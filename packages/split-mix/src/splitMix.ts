import { type Seed64Input, seed64 } from '@repo/determinism/seed'
import { type Numeric } from '@repo/types/Numeric'

import { snapshot } from './snapshot'

export type SnapshotCurried<Result extends SnapshotResult> = (
  state: SplitMix64State,
) => SplitMix64<Result>

export type SnapshotProps<Result extends SnapshotResult> = Readonly<{
  result: Result
  state: SplitMix64State
}>

export type SnapshotResult = SplitMix64State | undefined

export type SplitMix64<Result extends SnapshotResult = undefined> = Readonly<
  Record<'back' | 'next', () => SplitMix64<SplitMix64State>> &
    Record<'jump', (steps: Numeric) => SplitMix64<SplitMix64State>> &
    SnapshotProps<Result>
>

export type SplitMix64State = bigint

// https://prng.di.unimi.it/splitmix64.c
export function splitMix64({
  seed,
  state,
}: Readonly<
  Partial<Record<'state', SnapshotResult>> & Record<'seed', Seed64Input>
>): SplitMix64 {
  return snapshot({
    result: undefined,
    state: state ?? seed64(seed),
  })
}
