import { uInt64 } from '@repo/64-bit/uInt'
import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { type BigIntCallback } from '@repo/arithmetic/types'
import { pipe } from '@repo/composition/pipe'

export const addWeylIncrement64: BigIntCallback = pipe([
  add(0x9e37_79b9_7f4a_7c15n),
  uInt64,
])
