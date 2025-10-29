import { type BigIntCallback, type NumberCallback, type Numeric } from './add'
import { multiply } from './multiply'

export function multiplyCurried(a: number): NumberCallback
export function multiplyCurried(a: bigint): BigIntCallback
export function multiplyCurried(a: Numeric): BigIntCallback | NumberCallback {
  if (typeof a === 'bigint') return (b: bigint): bigint => multiply(a, b)
  else return (b: number): number => multiply(a, b)
}
