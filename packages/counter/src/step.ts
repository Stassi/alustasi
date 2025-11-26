import { pipe } from '@repo/combinatorics/pipe/pipe'
import { type Numeric } from '@repo/types/Numeric'

import { bigAdd } from './bigAdd'
import {
  type Counter,
  type CounterState,
  type CounterWidthNormalizer,
} from './counter'
import { snapshotCurried as snapshot } from './snapshot'

export type StepByProps = Record<'state', CounterState> &
  Record<'steps', Numeric>

export type StepProps = Record<
  'stepBackward' | 'stepForward',
  (state: CounterState) => Counter
> &
  Record<'stepBy', (props: StepByProps) => Counter>

export function step(widthNormalizer: CounterWidthNormalizer): StepProps {
  const stepBy = ({ state, steps }: StepByProps): Counter =>
      stepCurried(steps)(state),
    stepCurried =
      (steps: Numeric) =>
      (state: CounterState): Counter =>
        pipe([bigAdd(steps), snapshot(widthNormalizer)])(state)

  return {
    stepBackward: stepCurried(-1),
    stepBy,
    stepForward: stepCurried(1),
  }
}
