import { uInt64 } from '@repo/64-bit/uInt'
import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { pipe } from '@repo/composition/pipe'
import { type BigIntCallback } from '@repo/types/NumericCallback'

export const addWeylIncrement64: BigIntCallback = pipe([
  add(0x9e37_79b9_7f4a_7c15n),
  uInt64,
])
