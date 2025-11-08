import { type BigIntCallback } from '@repo/types/NumericCallback'

import { shiftRight } from './shiftRight'

export function shiftRightCurried(amount: bigint): BigIntCallback {
  return (target: bigint): bigint => shiftRight(target, amount)
}
