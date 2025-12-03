// noinspection JSUnusedLocalSymbols

import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { wCurried as w } from '@repo/combinatorics/w/wCurried'
import { type Numeric } from '@repo/types/Numeric'

export type Orbit = Readonly<
  Readonly<Record<'result' | 'state', OrbitState>> &
    Record<'back' | 'next', () => Orbit> &
    Record<'jump', OrbitSnapshotCurried>
>

export type OrbitProps = Readonly<
  Partial<
    Record<'increment' | 'initialState', Numeric> &
      Record<'widthNormalizer', OrbitWidthNormalizer>
  >
>

export type OrbitState = bigint

export type OrbitWidthNormalizer = (n: Numeric) => OrbitState

type OrbitSnapshotCurried = (steps: Numeric) => Orbit

type OrbitStepByProps = Readonly<
  Record<'state', OrbitState> & Record<'steps', Numeric>
>

export function orbit({
  increment = 1n,
  initialState = 0n,
  widthNormalizer = BigInt,
}: OrbitProps): Orbit {
  const snapshot: (initialState: Numeric) => Orbit = pipe([
      widthNormalizer,
      w<OrbitState, Orbit>(
        (state: OrbitState) =>
          (result: OrbitState): Orbit => ({
            back: (): Orbit => stepBackward(state),
            jump: (steps: Numeric): Orbit => stepBy({ state, steps }),
            next: (): Orbit => stepForward(state),
            result,
            state,
          }),
      ),
    ]),
    stepCurried = (steps: Numeric): ((state: Numeric) => Orbit) =>
      pipe([pipe([BigInt, multiply(increment), add])(steps), snapshot]),
    stepBackward: OrbitSnapshotCurried = stepCurried(-1n),
    stepBy = ({ state, steps }: OrbitStepByProps): Orbit =>
      stepCurried(steps)(state),
    stepForward: OrbitSnapshotCurried = stepCurried(1n)
  return snapshot(initialState)
}
