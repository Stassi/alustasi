import { type Callback } from '@repo/types/Callback'

export function apply<T>(x: T, fn: Callback<T>): T {
  return fn(x)
}
