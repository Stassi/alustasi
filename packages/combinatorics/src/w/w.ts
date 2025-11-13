import { type CallbackBinaryCurried } from '@repo/types/Callback'

export function w<T, R = T>(f: CallbackBinaryCurried<T, R>, x: T): R {
  return f(x)(x)
}
