import { xorMultiplyByFNVPrime64 } from './xorMultiplyByFNVPrime'

// https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function
export function fnv1a64(bytes: Uint8Array): bigint {
  return bytes.reduce(
    (hash: bigint, byte: number): bigint =>
      xorMultiplyByFNVPrime64(hash, BigInt(byte)),
    0xcbf2_9ce4_8422_2325n,
  )
}
