import { type Numeric } from '@repo/types/Numeric'

import { snapshot, snapshot64 } from './snapshot'

export type Counter = Readonly<
  Record<'back' | 'next', () => Counter> &
    Record<'jump', (steps: Numeric) => Counter> &
    Record<'result' | 'state', CounterState>
>
export type CounterState = bigint
export type CounterWithWidth = (state?: Numeric) => Counter

function widthAppliedCounter(fixedWidth?: 64): CounterWithWidth {
  return fixedWidth === undefined
    ? (state: Numeric = 0n): Counter => snapshot(state)
    : (state: Numeric = 0n): Counter => snapshot64(state)
}

export const counter: CounterWithWidth = widthAppliedCounter()
export const counter64: CounterWithWidth = widthAppliedCounter(64)
