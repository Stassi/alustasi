import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { type Numeric } from '@repo/types/Numeric'

import {
  type Orbit,
  type OrbitState,
  type OrbitWidthNormalizerKVPair,
} from './orbit'
import { snapshot } from './snapshot'

export type OrbitStepProps = Readonly<
  OrbitWidthNormalizerKVPair &
    Record<'increment' | 'steps', Numeric> &
    Record<'state', OrbitState>
>

export function step({
  increment,
  state,
  steps,
  widthNormalizer,
}: OrbitStepProps): Orbit {
  return snapshot({
    increment,
    initialState: pipe([BigInt, multiply(increment), add])(steps)(state),
    widthNormalizer,
  })
}
