import { type Numeric } from '@repo/types/Numeric'

export function uInt64(n: Numeric): bigint {
  return BigInt.asUintN(64, typeof n === 'bigint' ? n : BigInt(n))
}
