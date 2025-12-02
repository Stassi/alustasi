import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import {
  type OrbitalSequence,
  orbitalSequence,
} from './orbitalSequence/orbitalSequence'

export function weylSequence64(initialState: Numeric = 0n): OrbitalSequence {
  return orbitalSequence({
    increment: 0x9e37_79b9_7f4a_7c15n,
    initialState,
    widthNormalizer: uInt64,
  })
}
