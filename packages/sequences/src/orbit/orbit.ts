import { type Numeric } from '@repo/types/Numeric'

import { type OrbitSnapshotProps, snapshot } from './snapshot'

export type Orbit = Readonly<
  Readonly<Record<'result' | 'state', OrbitState>> &
    Record<'back' | 'next', () => Orbit> &
    Record<'jump', (steps: Numeric) => Orbit>
>
export type OrbitProps = Readonly<Partial<OrbitSnapshotProps>>
export type OrbitState = bigint
export type OrbitWidthNormalizer = (initialState: Numeric) => OrbitState
export type OrbitWidthNormalizerKVPair = Record<
  'widthNormalizer',
  OrbitWidthNormalizer
>

export function orbit({
  increment = 1n,
  initialState = 0n,
  widthNormalizer = BigInt,
}: OrbitProps): Orbit {
  return snapshot({ increment, initialState, widthNormalizer })
}
