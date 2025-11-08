import { type BigIntCallback } from '@repo/types/NumericCallback'

import { xor } from './xor'

export function xorCurried(x: bigint): BigIntCallback {
  return (y: bigint): bigint => xor(x, y)
}
