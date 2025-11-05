import { type Numeric } from '@repo/types/Numeric'

export function add(a: number, b: number): number
export function add(a: bigint, b: bigint): bigint
export function add(a: Numeric, b: Numeric): Numeric {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  if (typeof a === 'bigint' && typeof b === 'bigint') return a + b
  throw new TypeError('Addition parameters must be of the same type')
}
