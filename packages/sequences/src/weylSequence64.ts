import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import { type Orbit, orbit } from './orbit/orbit'

// https://github.com/apache/commons-rng/blob/27c5f8c481599e73c8ec7116f6786f15917c0dab/commons-rng-simple/src/main/java/org/apache/commons/rng/simple/internal/MixFunctions.java#L25-L31
export function weylSequence64(initialState: Numeric = 0n): Orbit {
  return orbit({
    increment: 0x9e37_79b9_7f4a_7c15n,
    initialState,
    widthNormalizer: uInt64,
  })
}
