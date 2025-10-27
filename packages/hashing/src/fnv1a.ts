import { bigInt64 } from '@repo/64-bit/bigInt'

// https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function
export function fnv1a64(bytes: Uint8Array): bigint {
  let hash = 0xc_bf29_ce48_4222_325n
  bytes.forEach((byte: number): void => {
    hash ^= bigInt64(byte)
    hash *= bigInt64(0x1000_0000_1b3n)
  })
  return hash
}
