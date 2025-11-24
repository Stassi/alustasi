import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { repeat } from '@repo/effects/repeat'
import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallback } from '@repo/types/NumericCallback'

import { type Counter, counter } from '../counter'

describe('Counter (variable-width)', (): void => {
  const [bigNegativeOne, bigZero, bigOne, bigTwo] = [-1n, 0n, 1n, 2n],
    [five, eight, ten, fortyTwo] = [5, 8, 10, 42],
    [negativeOne, zero, one] = [-1, 0, 1],
    bigDecrement = add(bigNegativeOne) as NumericCallback<bigint>,
    max64: Numeric = bigDecrement(2n ** 64n)

  it('should start at 0 by default', (): void => {
    const { result, state }: Counter = counter()

    expect(state).toBe(bigZero)
    expect(result).toBe(bigZero)
  })

  it('should accept 0 as its initial state', (): void => {
    const { result, state }: Counter = counter(zero)

    expect(state).toBe(bigZero)
    expect(result).toBe(bigZero)
  })

  it('should apply BigInt to the initial state', (): void => {
    const { result, state }: Counter = counter(negativeOne)

    expect(state).toBe(bigNegativeOne)
    expect(result).toBe(bigNegativeOne)
  })

  it('should treat result as the identity on state', (): void => {
    const { result, state }: Counter = counter(fortyTwo)

    expect(result).toBe(state)
    expect(state).toBe(result)
  })

  describe('wrapping behavior', (): void => {
    it('should not wrap backward', (): void => {
      const { result, state }: Counter = counter().back()

      expect(state).not.toBe(max64)
      expect(result).not.toBe(max64)
    })

    it('should not wrap forward', (): void => {
      const { result, state }: Counter = counter(max64).next()

      expect(state).not.toBe(0n)
      expect(result).not.toBe(0n)
    })
  })

  describe('jump', (): void => {
    it('should match next() for a single forward step', (): void => {
      const base: Counter = counter(),
        viaJump: Counter = base.jump(one),
        viaNext: Counter = base.next()

      expect(viaJump.state).toBe(viaNext.state)
      expect(viaJump.result).toBe(viaNext.result)
    })

    it('should match back() for a single backward step', (): void => {
      const base: Counter = counter(),
        { result: resultViaBack, state: stateViaBack }: Counter = base.back(),
        { result: resultViaJump, state: stateViaJump }: Counter =
          base.jump(negativeOne)

      expect(stateViaJump).toBe(stateViaBack)
      expect(resultViaJump).toBe(resultViaBack)
    })

    it('should allow a walker to catch up to a jumper', (): void => {
      const base: Counter = counter()
      let walker: Counter = base

      repeat((): void => {
        walker = walker.next()
      }, ten)

      const { result: jumperResult, state: jumperState } = base.jump(ten),
        { result: walkerResult, state: walkerState } = walker

      expect(walkerState).toBe(jumperState)
      expect(walkerResult).toBe(jumperResult)
    })

    it('should support full back-and-forth traversal via jump()', (): void => {
      const base: Counter = counter(),
        forward: Counter = base.jump(ten),
        backAgain: Counter = forward.jump(-ten),
        forwardAgain: Counter = backAgain.jump(ten)

      expect(backAgain.state).toBe(base.state)

      expect(forwardAgain.state).toBe(forward.state)
      expect(forwardAgain.result).toBe(forward.result)
    })
  })

  describe('immutability', (): void => {
    it('should not mutate previous snapshots', (): void => {
      const r0: Counter = counter(),
        r1: Counter = r0.next()

      const { next: nextR1, result: resultR1, state: stateR1 }: Counter = r1
      const r2: Counter = nextR1()
      const { result: resultR2, state: stateR2 }: Counter = r2

      expect(r0).not.toBe(r1)
      expect(r1).not.toBe(r2)

      expect(r0.state).toBe(bigZero)
      expect(stateR1).toBe(bigOne)

      expect(stateR2).toBe(bigTwo)

      expect(r0.result).toBe(r0.state)
      expect(resultR1).toBe(stateR1)
      expect(resultR2).toBe(stateR2)
    })
  })

  describe('determinism', (): void => {
    it('should produce the same orbit from the same starting state', (): void => {
      let a: Counter = counter(five),
        b: Counter = counter(five)

      const seqA: bigint[] = [],
        seqB: bigint[] = []

      repeat((): void => {
        seqA.push(a.result)
        seqB.push(b.result)

        a = a.next()
        b = b.next()
      }, eight)

      expect(seqA).toHaveLength(eight)
      expect(seqB).toHaveLength(eight)

      expect(seqA).toStrictEqual(seqB)
    })
  })
})
