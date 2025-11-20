import { type Numeric } from '@repo/types/Numeric'

import { snapshot } from './snapshot'

export type Counter64 = Readonly<
  Record<'back' | 'next', () => Counter64> &
    Record<'jump', (steps: Numeric) => Counter64> &
    Record<'result' | 'state', Counter64State>
>
export type Counter64State = bigint

export function counter64(state: Numeric = 0n): Counter64 {
  return snapshot(state)
}
