import { type Numeric } from '@repo/types/Numeric'

import { snapshot } from './snapshot'

export type Sequence64 = Readonly<
  Readonly<Record<'result' | 'state', Sequence64State>> &
    Record<'back' | 'next', () => Sequence64> &
    Record<'jump', (steps: Numeric) => Sequence64>
>

export type Sequence64State = bigint

export function sequence64(initialState: Numeric = 0n): Sequence64 {
  return snapshot(initialState)
}
