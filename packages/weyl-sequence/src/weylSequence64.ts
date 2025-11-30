import { type Numeric } from '@repo/types/Numeric'

import { snapshot } from './snapshot'

export type WeylSequence64 = Readonly<
  Readonly<Record<'result' | 'state', WeylSequence64State>> &
    Record<'back' | 'next', () => WeylSequence64> &
    Record<'jump', (steps: Numeric) => WeylSequence64>
>

export type WeylSequence64State = bigint

export function weylSequence64(initialState: Numeric = 0n): WeylSequence64 {
  return snapshot(initialState)
}
