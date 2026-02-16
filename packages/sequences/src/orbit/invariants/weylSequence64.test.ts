import { repeat } from '@repo/effects/repeat'
import { uInt64 } from '@repo/fixed-width/bits64/uInt'
import { type Numeric } from '@repo/types/Numeric'

import { type Orbit, weylSequence64 } from '../orbit'

describe('Weyl sequence 64 (orbit)', (): void => {
  const goldenRatio64 = 0x9e37_79b9_7f4a_7c15n,
    over64: bigint = 2n ** 64n,
    max64: bigint = over64 - 1n,
    zero = 0n

  it('should normalize the initial state via uInt64', (): void => {
    const { result, state } = weylSequence64(-1n)
    expect(state).toBe(max64)
    expect(result).toBe(max64)
  })

  it('should expose the result as identity on state', (): void => {
    const { result, state } = weylSequence64(42n)
    expect(result).toBe(state)
  })

  it('next() / back() stay inside the 64-bit ring', (): void => {
    const { back, next }: Orbit = weylSequence64(),
      { state: backState }: Orbit = back(),
      { state: nextState }: Orbit = next()

    expect(nextState).toBe(uInt64(goldenRatio64))
    expect(backState).toBe(uInt64(-goldenRatio64))
  })

  it('jump(1) matches next()', (): void => {
    const { jump, next } = weylSequence64(0n),
      { result: jumpResult, state: jumpState } = jump(1),
      { result: nextResult, state: nextState } = next()

    expect(jumpState).toBe(nextState)
    expect(jumpResult).toBe(nextResult)
  })

  it('jump(-1) matches back()', (): void => {
    const { back, jump }: Orbit = weylSequence64(0n),
      { result: backResult, state: backState }: Orbit = back(),
      { result: jumpResult, state: jumpState }: Orbit = jump(-1)

    expect(jumpState).toBe(backState)
    expect(jumpResult).toBe(backResult)
  })

  it('walker vs jumper forward (short)', (): void => {
    const { jump, next }: Orbit = weylSequence64(0n),
      steps = 10,
      { result: jumperResult, state: jumperState }: Orbit = jump(steps)
    let walker: Orbit = next()

    repeat((): void => {
      walker = walker.next()
    }, steps - 1)

    expect(walker.state).toBe(jumperState)
    expect(walker.result).toBe(jumperResult)
  })

  it('walker vs jumper backward (short)', (): void => {
    const steps = 10,
      // eslint-disable-next-line perfectionist/sort-variable-declarations
      { jump: baseJump }: Orbit = weylSequence64(0n),
      { back: startBack, jump: startJump }: Orbit = baseJump(steps),
      { result: jumperResult, state: jumperState }: Orbit = startJump(-steps)
    let walker: Orbit = startBack()

    repeat((): void => {
      walker = walker.back()
    }, steps - 1)

    expect(walker.state).toBe(jumperState)
    expect(walker.result).toBe(jumperResult)
  })

  it('should jump forward then backward returns to the same snapshot', (): void => {
    const steps = 25,
      // eslint-disable-next-line perfectionist/sort-variable-declarations
      { jump: baseJump, state: baseState }: Orbit = weylSequence64(0n),
      {
        jump: forwardJump,
        result: forwardResult,
        state: forwardState,
      }: Orbit = baseJump(steps),
      { jump: backAgainJump, state: backAgainState }: Orbit =
        forwardJump(-steps),
      { result: forwardAgainResult, state: forwardAgainState }: Orbit =
        backAgainJump(steps)

    expect(backAgainState).toBe(baseState)
    expect(forwardAgainState).toBe(forwardState)
    expect(forwardAgainResult).toBe(forwardResult)
  })

  it('should produce immutable snapshots along the orbit', (): void => {
    const s0: Orbit = weylSequence64(),
      s1: Orbit = s0.next(),
      s2: Orbit = s1.next()

    expect(s0).not.toBe(s1)
    expect(s1).not.toBe(s2)

    expect(s0.state).toBe(zero)
    expect(s1.state).toBe(uInt64(zero + goldenRatio64))
    expect(s2.state).toBe(uInt64(zero + 2n * goldenRatio64))

    expect(s0.result).toBe(s0.state)
    expect(s1.result).toBe(s1.state)
    expect(s2.result).toBe(s2.state)
  })

  it('should be deterministic for a given initial state', (): void => {
    const initial: Numeric = 123n,
      steps = 16

    let a: Orbit = weylSequence64(initial),
      b: Orbit = weylSequence64(initial)

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
