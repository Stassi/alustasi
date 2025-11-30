import { pipe } from '@repo/combinatorics/pipe/pipe'
import { type Numeric } from '@repo/types/Numeric'

import { addGoldenRatioProduct } from './goldenRatio/addGoldenRatioProduct'
import { type WeylSequence64SnapshotCurried } from './snapshot'
import {
  type WeylSequence64,
  type WeylSequence64State,
  weylSequence64,
} from './weylSequence64'

const stepCurried = (steps: Numeric): WeylSequence64SnapshotCurried =>
  pipe([addGoldenRatioProduct(steps), weylSequence64])

export const stepForward: WeylSequence64SnapshotCurried = stepCurried(1)
export const stepBackward: WeylSequence64SnapshotCurried = stepCurried(-1)

export function stepBy({
  state,
  steps,
}: Readonly<
  Record<'state', WeylSequence64State> & Record<'steps', Numeric>
>): WeylSequence64 {
  return stepCurried(steps)(state)
}
