import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import { type Orbit, orbit } from '../orbit'

export function counter64(initialState: Numeric = 0n): Orbit {
  return orbit({
    initialState,
    widthNormalizer: uInt64,
  })
}
