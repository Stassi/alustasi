import { type Numeric } from '@repo/types/Numeric'

import { type Orbit, orbit } from '../orbit'

export function counter(initialState: Numeric = 0n): Orbit {
  return orbit({
    initialState,
  })
}
