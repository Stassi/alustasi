import { uInt64 } from '@repo/64-bit/uInt'
import { fnv1a64 as hash64 } from '@repo/hashing/fnv1a'
import { type BytesLike } from '@repo/types/BytesLike'

export type Seed64Input = bigint | BytesLike | number

export function seed64(seed: Seed64Input): bigint {
  return typeof seed === 'bigint' || typeof seed === 'number'
    ? uInt64(seed)
    : hash64(seed)
}
