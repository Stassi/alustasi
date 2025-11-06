import { type Seed64Input, seed64 } from '@repo/determinism/seed'

import { snapshot } from './snapshot'

export type SplitMix64<Result extends bigint | undefined = undefined> =
  Readonly<{
    next: () => SplitMix64<bigint>
    result: Result
    state: bigint
  }>

export type SplitMix64Props = Readonly<
  {
    seed: Seed64Input
  } & Partial<{
    state: bigint | undefined
  }>
>

// https://prng.di.unimi.it/splitmix64.c
export function splitMix64({ seed, state }: SplitMix64Props): SplitMix64 {
  return snapshot({
    result: undefined,
    state: state ?? seed64(seed),
  })
}
