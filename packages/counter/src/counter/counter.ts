import { type Numeric } from '@repo/types/Numeric'

import { snapshot } from './snapshot'

export type Counter = Readonly<
  Record<'back' | 'next', () => Counter> &
    Record<'jump', (steps: Numeric) => Counter> &
    Record<'result' | 'state', CounterState>
>
export type CounterState = bigint

export function counter(state: Numeric = 0n): Counter {
  return snapshot(state)
}
