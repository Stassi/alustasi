import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { pipe } from '@repo/combinatorics/pipe/pipe'
import { wCurried as w } from '@repo/combinatorics/w/wCurried'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallback } from '@repo/types/NumericCallback'

export type Sequence64 = Readonly<
  Readonly<Record<'result' | 'state', Sequence64State>> &
    Record<'back' | 'next', () => Sequence64> &
    Record<'jump', (steps: Numeric) => Sequence64>
>
export type Sequence64State = bigint

type Sequence64Snapshot = (n: Numeric) => Sequence64
type Sequence64SnapshotCurried = (state: Sequence64State) => Sequence64

const increment = 1n
const addIncrementProduct: (steps: Numeric) => NumericCallback<Numeric> = pipe([
  BigInt,
  multiply(increment),
  add,
])

export function sequence64(initialState: Numeric = 0n): Sequence64 {
  return snapshot(initialState)
}

const stepCurried = (steps: Numeric): Sequence64SnapshotCurried =>
  pipe([addIncrementProduct(steps), sequence64])

const stepForward: Sequence64SnapshotCurried = stepCurried(1)
const stepBackward: Sequence64SnapshotCurried = stepCurried(-1)

function stepBy({
  state,
  steps,
}: Readonly<
  Record<'state', Sequence64State> & Record<'steps', Numeric>
>): Sequence64 {
  return stepCurried(steps)(state)
}

const snapshot: Sequence64Snapshot = pipe([
  uInt64,
  w<Sequence64State, Sequence64>(
    (state: Sequence64State): Sequence64SnapshotCurried =>
      (result: Sequence64State): Sequence64 => ({
        back: (): Sequence64 => stepBackward(state),
        jump: (steps: Numeric): Sequence64 => stepBy({ state, steps }),
        next: (): Sequence64 => stepForward(state),
        result,
        state,
      }),
  ),
])

export function counterSequence64(initialState: Numeric = 0n): Sequence64 {
  return sequence64VariableIncrement({
    increment: 1n,
    initialState,
  })
}

export function weylSequence64(initialState: Numeric = 0n): Sequence64 {
  return sequence64VariableIncrement({
    increment: 0x9e37_79b9_7f4a_7c15n,
    initialState,
  })
}

function sequence64VariableIncrement({
  initialState = 0n,
}: Readonly<
  Partial<Record<'initialState', Numeric>> & Record<'increment', Numeric>
>): Sequence64 {
  return sequence64(initialState)
}
