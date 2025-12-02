// noinspection JSUnusedLocalSymbols

import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { wCurried as w } from '@repo/combinatorics/w/wCurried'
import { type Numeric } from '@repo/types/Numeric'

export type OrbitalSequence = Readonly<
  Readonly<Record<'result' | 'state', OrbitalSequenceState>> &
    Record<'back' | 'next', () => OrbitalSequence> &
    Record<'jump', OrbitalSequenceSnapshotCurried>
>
export type OrbitalSequenceProps = Readonly<
  Partial<
    Record<'increment' | 'initialState', Numeric> &
      Record<'widthNormalizer', OrbitalSequenceWidthNormalizer>
  >
>
export type OrbitalSequenceState = bigint

export type OrbitalSequenceWidthNormalizer = (
  n: Numeric,
) => OrbitalSequenceState

type OrbitalSequenceSnapshotCurried = (steps: Numeric) => OrbitalSequence

type OrbitalSequenceStepByProps = Readonly<
  Record<'state', OrbitalSequenceState> & Record<'steps', Numeric>
>

export function orbitalSequence({
  increment = 1n,
  initialState = 0n,
  widthNormalizer = BigInt,
}: OrbitalSequenceProps): OrbitalSequence {
  const snapshot: (initialState: Numeric) => OrbitalSequence = pipe([
      widthNormalizer,
      w<OrbitalSequenceState, OrbitalSequence>(
        (state: OrbitalSequenceState) =>
          (result: OrbitalSequenceState): OrbitalSequence => ({
            back: (): OrbitalSequence => stepBackward(state),
            jump: (steps: Numeric): OrbitalSequence => stepBy({ state, steps }),
            next: (): OrbitalSequence => stepForward(state),
            result,
            state,
          }),
      ),
    ]),
    stepCurried = (steps: Numeric): ((state: Numeric) => OrbitalSequence) =>
      pipe([pipe([BigInt, multiply(increment), add])(steps), snapshot]),
    stepBackward: OrbitalSequenceSnapshotCurried = stepCurried(-1n),
    stepBy = ({ state, steps }: OrbitalSequenceStepByProps): OrbitalSequence =>
      stepCurried(steps)(state),
    stepForward: OrbitalSequenceSnapshotCurried = stepCurried(1n)
  return snapshot(initialState)
}
