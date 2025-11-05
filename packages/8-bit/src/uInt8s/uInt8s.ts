import { type BytesLike } from '@repo/types/BytesLike'
import { isArrayBufferLike } from '@repo/types/guards/isArrayBufferLike'
import { isDataViewLike } from '@repo/types/guards/isDataViewLike'
import { isString } from '@repo/types/guards/isString'
import { isUint8Array } from '@repo/types/guards/isUint8Array'

import { fromDataView } from './fromDataView'
import { fromUTF8 } from './fromUTF8'

export function uInt8s(x: BytesLike): Uint8Array {
  if (isUint8Array(x)) return x
  if (isString(x)) return fromUTF8(x)
  if (isArrayBufferLike(x)) return new Uint8Array(x)
  if (isDataViewLike(x)) return fromDataView(x)

  throw new TypeError('Unsupported type')
}
