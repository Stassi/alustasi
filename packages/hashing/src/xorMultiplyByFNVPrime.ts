import { uInt64 } from '@repo/64-bit/uInt'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { xor } from '@repo/bitwise/xor'
import { pipe } from '@repo/composition/pipe'

export const xorMultiplyByFNVPrime64: (x: bigint, y: bigint) => bigint = pipe([
  xor<bigint>,
  multiply(0x0100_0000_01b3n),
  uInt64,
])
