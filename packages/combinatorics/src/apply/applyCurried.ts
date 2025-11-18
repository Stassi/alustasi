import { type Callback } from '@repo/types/Callback'

import { apply } from './apply'

// noinspection JSUnusedGlobalSymbols
export function applyCurried<T>(x: T): (fn: Callback<T>) => T {
  return (fn: Callback<T>): T => apply<T>(x, fn)
}
