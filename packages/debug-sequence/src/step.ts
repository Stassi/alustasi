import { pipe } from '@repo/combinatorics/pipe/pipe'
import { type Numeric } from '@repo/types/Numeric'

import { addIncrementProduct } from './increment/addIncrementProduct'
import { type Sequence64, type Sequence64State, sequence64 } from './sequence64'
import { type Sequence64SnapshotCurried } from './snapshot'

const stepCurried = (steps: Numeric): Sequence64SnapshotCurried =>
  pipe([addIncrementProduct(steps), sequence64])

export const stepForward: Sequence64SnapshotCurried = stepCurried(1)
export const stepBackward: Sequence64SnapshotCurried = stepCurried(-1)

export function stepBy({
  state,
  steps,
}: Readonly<
  Record<'state', Sequence64State> & Record<'steps', Numeric>
>): Sequence64 {
  return stepCurried(steps)(state)
}
