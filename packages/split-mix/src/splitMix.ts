import { type Seed64Input, seed64 } from '@repo/determinism/seed'
import { type Numeric } from '@repo/types/Numeric'

import { snapshot } from './snapshot'

export type SnapshotProps<Result extends bigint | undefined> = Readonly<{
  result: Result
  state: bigint
}>

export type SplitMix64<Result extends bigint | undefined = undefined> =
  Readonly<
    {
      jump: (steps: Numeric) => SplitMix64<bigint>
    } & Record<'back' | 'next', () => SplitMix64<bigint>> &
      SnapshotProps<Result>
  >

// https://prng.di.unimi.it/splitmix64.c
export function splitMix64({
  seed,
  state,
}: Readonly<
  Partial<Record<'state', bigint | undefined>> & Record<'seed', Seed64Input>
>): SplitMix64 {
  return snapshot({
    result: undefined,
    state: state ?? seed64(seed),
  })
}
