import { type Numeric } from '@repo/types/Numeric'
import {
  type BigIntCallback,
  type NumberCallback,
} from '@repo/types/NumericCallback'

import { multiply } from './multiply'

export function multiplyCurried(a: number): NumberCallback
export function multiplyCurried(a: bigint): BigIntCallback
export function multiplyCurried(a: Numeric): BigIntCallback | NumberCallback {
  if (typeof a === 'bigint') return (b: bigint): bigint => multiply(a, b)
  else return (b: number): number => multiply(a, b)
}
