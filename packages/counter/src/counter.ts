import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import { snapshot } from './snapshot'

export type Counter = Readonly<
  Record<'back' | 'next', () => Counter> &
    Record<'jump', (steps: Numeric) => Counter> &
    Record<'result' | 'state', CounterState>
>
export type CounterState = bigint
export type CounterWidthNormalizer = (initialState: Numeric) => CounterState

export const counter = (initialState: Numeric = 0n): Counter =>
  snapshot({ initialState })

export const counter64 = (initialState: Numeric = 0n): Counter =>
  snapshot({ initialState, widthNormalizer: uInt64 })
