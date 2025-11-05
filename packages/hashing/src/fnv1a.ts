import { uInt64 } from '@repo/64-bit/uInt'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { xor } from '@repo/bitwise/xor'
import { pipe } from '@repo/composition/pipe'
import { type BytesLike } from '@repo/types/BytesLike'

// https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function
export function fnv1a64(bytes: Uint8Array): bigint {
  return Array.from(bytes, BigInt).reduce(
    pipe([xor<bigint>, multiply(0x0100_0000_01b3n), uInt64]),
    0xcbf2_9ce4_8422_2325n,
  )
}
