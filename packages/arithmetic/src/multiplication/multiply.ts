import { type Numeric } from '@repo/types/Numeric'

export function multiply(a: number, b: number): number
export function multiply(a: bigint, b: bigint): bigint
export function multiply(a: Numeric, b: Numeric): Numeric {
  if (typeof a === 'number' && typeof b === 'number') return a * b
  if (typeof a === 'bigint' && typeof b === 'bigint') return a * b
  throw new TypeError('Multiplication parameters must be of the same type')
}
