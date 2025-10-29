import {
  type BigIntCallback,
  type NumberCallback,
  type Numeric,
} from '../types'
import { add } from './add'

export function addCurried(a: number): NumberCallback
export function addCurried(a: bigint): BigIntCallback
export function addCurried(a: Numeric): BigIntCallback | NumberCallback {
  if (typeof a === 'bigint') return (b: bigint): bigint => add(a, b)
  else return (b: number): number => add(a, b)
}
