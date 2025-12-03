import { type Numeric } from '@repo/types/Numeric'

import { type Orbit, orbit } from './orbit/orbit'

export function counter(initialState: Numeric = 0n): Orbit {
  return orbit({
    initialState,
  })
}
