import { type CallbackBinaryCurried } from '@repo/types/Callback'

import { w } from './w'

export function wCurried<T, R = T>(
  f: CallbackBinaryCurried<T, R>,
): (x: T) => R {
  return (x: T): R => w<T, R>(f, x)
}
