import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import {
  type OrbitalSequence,
  orbitalSequence,
} from './orbitalSequence/orbitalSequence'

export function counter64(initialState: Numeric = 0n): OrbitalSequence {
  return orbitalSequence({
    initialState,
    widthNormalizer: uInt64,
  })
}
