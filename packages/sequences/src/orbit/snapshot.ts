import { pipe } from '@repo/combinatorics/pipe/pipe'
import { wCurried as w } from '@repo/combinatorics/w/wCurried'
import { type Numeric } from '@repo/types/Numeric'

import {
  type Orbit,
  type OrbitState,
  type OrbitWidthNormalizerKVPair,
} from './orbit'
import { step } from './step'

export type OrbitSnapshotProps = Readonly<
  OrbitWidthNormalizerKVPair & Record<'increment' | 'initialState', Numeric>
>

export function snapshot({
  increment,
  initialState,
  widthNormalizer,
}: OrbitSnapshotProps): Orbit {
  return pipe([
    widthNormalizer,
    w<OrbitState, Orbit>(
      (state: OrbitState) =>
        (result: OrbitState): Orbit => ({
          back: (): Orbit =>
            step({ increment, state, steps: -1n, widthNormalizer }),
          jump: (steps: Numeric): Orbit =>
            step({ increment, state, steps, widthNormalizer }),
          next: (): Orbit =>
            step({ increment, state, steps: 1n, widthNormalizer }),
          result,
          state,
        }),
    ),
  ])(initialState)
}
