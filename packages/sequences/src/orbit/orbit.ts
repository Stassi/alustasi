import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { type SwapCurried, c } from '@repo/combinatorics/c'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallbackCurried } from '@repo/types/NumericCallback'

export type Orbit = Readonly<
  Readonly<Record<'result' | 'state', OrbitState>> &
    Record<'back' | 'next', () => Orbit> &
    Record<'jump', OrbitStepBy>
>
export type OrbitFromState = (state?: Numeric) => Orbit
export type OrbitFromStateFromOptionalIncrement = (
  increment?: Numeric,
) => OrbitFromState
export type OrbitSnapshotProps = Readonly<
  Partial<
    Record<'increment' | 'state', Numeric> &
      Record<'widthNormalizer', OrbitWidthNormalizer>
  >
>
export type OrbitState = bigint
export type OrbitWidthNormalizer = (state: Numeric) => OrbitState

type OrbitCurried = (
  widthNormalizer?: OrbitWidthNormalizer,
) => OrbitFromStateFromOptionalIncrement
type OrbitFromStateFromOptionalNormalizer = (
  widthNormalizer?: OrbitWidthNormalizer,
) => OrbitFromState
type OrbitStateCallbackCurried = NumericCallbackCurried<OrbitState>
type OrbitStateTransition = (state: OrbitState) => Orbit
type OrbitStepBy = (step: Numeric) => Orbit
type OrbitStepByBig = (step: bigint) => Orbit

export const orbitCurried: OrbitCurried =
  (widthNormalizer: OrbitWidthNormalizer = BigInt) =>
  (increment: Numeric = 1n): OrbitFromState => {
    const snapshot: OrbitStateTransition = pipe([
      widthNormalizer,
      (state: OrbitState): Orbit => {
        const stepByBig: OrbitStepByBig = pipe([
          (multiply as OrbitStateCallbackCurried)(BigInt(increment)),
          (add as OrbitStateCallbackCurried)(state),
          snapshot,
        ])

        return Object.freeze({
          back: (): Orbit => stepByBig(-1n),
          jump: pipe([BigInt, stepByBig]),
          next: (): Orbit => stepByBig(1n),
          result: state,
          state,
        })
      },
    ])

    return pipe([(state: Numeric = 0n): Numeric => state, BigInt, snapshot])
  }

export function orbit({
  increment,
  state,
  widthNormalizer,
}: OrbitSnapshotProps = {}): Orbit {
  return orbitCurried(widthNormalizer)(increment)(state)
}

export const orbitBy: SwapCurried<
  Numeric | undefined,
  OrbitWidthNormalizer | undefined,
  OrbitFromState
> = c(orbitCurried)
export const orbitByOne: OrbitFromStateFromOptionalNormalizer = orbitBy(1n)
export const orbitBy64: OrbitFromStateFromOptionalIncrement =
  orbitCurried(uInt64)

export const counter: OrbitFromState = orbitByOne(BigInt)
export const counter64: OrbitFromState = orbitByOne(uInt64)

// https://github.com/apache/commons-rng/blob/27c5f8c481599e73c8ec7116f6786f15917c0dab/commons-rng-simple/src/main/java/org/apache/commons/rng/simple/internal/MixFunctions.java#L25-L31
export const weylSequence64: OrbitFromState = orbitBy64(0x9e37_79b9_7f4a_7c15n)
