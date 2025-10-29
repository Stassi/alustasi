import { bigInt64 } from '@repo/64-bit/bigInt'
import { multiply } from '@repo/arithmetic/multiply'

// https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function
export function fnv1a64(bytes: Uint8Array): bigint {
  let hash = 0xcbf2_9ce4_8422_2325n
  bytes.forEach((byte: number): void => {
    hash ^= BigInt(byte)
    hash = multiply(hash, bigInt64(0x0100_0000_01b3n))
  })
  return hash
}
