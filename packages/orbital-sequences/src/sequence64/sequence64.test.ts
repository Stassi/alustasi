import { repeat } from '@repo/effects/repeat'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import { type Sequence64, sequence64 } from './sequence64'

describe('Sequence 64', (): void => {
  const increment = 1n,
    over64: bigint = 2n ** 64n,
    max64: bigint = over64 - 1n,
    zero = 0n

  it('should normalize the initial state via uInt64', (): void => {
    const { result, state } = sequence64(-1n)
    expect(state).toBe(max64)
    expect(result).toBe(max64)
  })

  it('should expose the result as identity on state', (): void => {
    const { result, state } = sequence64(42n)
    expect(result).toBe(state)
  })

  it('next() / back() stay inside the 64-bit ring', (): void => {
    const { back, next }: Sequence64 = sequence64(),
      { state: backState }: Sequence64 = back(),
      { state: nextState }: Sequence64 = next()

    expect(nextState).toBe(uInt64(increment))
    expect(backState).toBe(uInt64(-increment))
  })

  it('jump(1) matches next()', (): void => {
    const { jump, next } = sequence64(0n),
      { result: jumpResult, state: jumpState } = jump(1),
      { result: nextResult, state: nextState } = next()

    expect(jumpState).toBe(nextState)
    expect(jumpResult).toBe(nextResult)
  })

  it('jump(-1) matches back()', (): void => {
    const { back, jump }: Sequence64 = sequence64(0n),
      { result: backResult, state: backState }: Sequence64 = back(),
      { result: jumpResult, state: jumpState }: Sequence64 = jump(-1)

    expect(jumpState).toBe(backState)
    expect(jumpResult).toBe(backResult)
  })

  it('walker vs jumper forward (short)', (): void => {
    const { jump, next }: Sequence64 = sequence64(0n),
      steps = 10,
      { result: jumperResult, state: jumperState }: Sequence64 = jump(steps)
    let walker: Sequence64 = next()

    repeat((): void => {
      walker = walker.next()
    }, steps - 1)

    expect(walker.state).toBe(jumperState)
    expect(walker.result).toBe(jumperResult)
  })

  it('walker vs jumper backward (short)', (): void => {
    const steps = 10,
      { jump: baseJump }: Sequence64 = sequence64(0n),
      // eslint-disable-next-line perfectionist/sort-variable-declarations
      { back: startBack, jump: startJump }: Sequence64 = baseJump(steps),
      { result: jumperResult, state: jumperState }: Sequence64 =
        startJump(-steps)
    let walker: Sequence64 = startBack()

    repeat((): void => {
      walker = walker.back()
    }, steps - 1)

    expect(walker.state).toBe(jumperState)
    expect(walker.result).toBe(jumperResult)
  })

  it('should jump forward then backward returns to the same snapshot', (): void => {
    const steps = 25,
      { jump: baseJump, state: baseState }: Sequence64 = sequence64(0n),
      {
        jump: forwardJump,
        result: forwardResult,
        state: forwardState,
      }: Sequence64 = baseJump(steps),
      // eslint-disable-next-line perfectionist/sort-variable-declarations
      { jump: backAgainJump, state: backAgainState }: Sequence64 =
        forwardJump(-steps),
      { result: forwardAgainResult, state: forwardAgainState }: Sequence64 =
        backAgainJump(steps)

    expect(backAgainState).toBe(baseState)
    expect(forwardAgainState).toBe(forwardState)
    expect(forwardAgainResult).toBe(forwardResult)
  })

  it('should produce immutable snapshots along the orbit', (): void => {
    const s0: Sequence64 = sequence64(),
      s1: Sequence64 = s0.next(),
      s2: Sequence64 = s1.next()

    expect(s0).not.toBe(s1)
    expect(s1).not.toBe(s2)

    expect(s0.state).toBe(zero)
    expect(s1.state).toBe(uInt64(zero + increment))
    expect(s2.state).toBe(uInt64(zero + 2n * increment))

    expect(s0.result).toBe(s0.state)
    expect(s1.result).toBe(s1.state)
    expect(s2.result).toBe(s2.state)
  })

  it('should be deterministic for a given initial state', (): void => {
    const initial: Numeric = 123n,
      steps = 16

    let a: Sequence64 = sequence64(initial),
      b: Sequence64 = sequence64(initial)

    const seqA: bigint[] = [],
      seqB: bigint[] = []

    repeat(() => {
      seqA.push(a.result)
      seqB.push(b.result)

      a = a.next()
      b = b.next()
    }, steps)

    expect(seqA).toHaveLength(steps)
    expect(seqB).toHaveLength(steps)
    expect(seqA).toStrictEqual(seqB)
  })
})
