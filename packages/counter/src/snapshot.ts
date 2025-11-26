import { pipe } from '@repo/combinatorics/pipe/pipe'
import { type Numeric } from '@repo/types/Numeric'

import {
  type Counter,
  type CounterState,
  type CounterWidthNormalizer,
} from './counter'
import { step } from './step'

export function snapshot({
  initialState = 0n,
  widthNormalizer = BigInt,
}: Readonly<
  Partial<
    Record<'initialState', Numeric> &
      Record<'widthNormalizer', CounterWidthNormalizer>
  >
>): Counter {
  return snapshotCurried(widthNormalizer)(initialState)
}

export function snapshotCurried(
  widthNormalizer: CounterWidthNormalizer = BigInt,
): (initialState: Numeric) => Counter {
  const { stepBackward, stepBy, stepForward } = step(widthNormalizer)

  return pipe([
    widthNormalizer,
    (state: CounterState): Counter => ({
      back: (): Counter => stepBackward(state),
      jump: (steps: Numeric): Counter => stepBy({ state, steps }),
      next: (): Counter => stepForward(state),
      result: state,
      state,
    }),
  ])
}
