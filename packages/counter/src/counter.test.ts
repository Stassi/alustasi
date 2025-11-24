import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { repeat } from '@repo/effects/repeat'
import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallback } from '@repo/types/NumericCallback'

import { type Counter, counter, counter64 } from './counter'

describe('Counter', (): void => {
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

  describe('Counter 64', (): void => {
    const over64: bigint = 2n ** 64n
    const max64: bigint = over64 - 1n

    it('should start at 0 by default', (): void => {
      const c0: Counter = counter64()

      expect(c0.state).toBe(0n)
      expect(c0.result).toBe(0n)
    })

    it('should apply uInt64 to the initial state', (): void => {
      const c: Counter = counter64(-1)

      expect(c.state).toBe(max64)
      expect(c.result).toBe(max64)
    })

    it('should treat result as the identity on state', (): void => {
      const c: Counter = counter64(42)

      expect(c.result).toBe(c.state)
    })

    describe('wrapping behavior', (): void => {
      it('should wrap backward from 0 to max64', (): void => {
        const base: Counter = counter64(0),
          back: Counter = base.back()

        expect(back.state).toBe(max64)
        expect(back.result).toBe(max64)
      })

      it('should wrap forward from max64 to 0', (): void => {
        const base: Counter = counter64(max64),
          next: Counter = base.next()

        expect(next.state).toBe(0n)
        expect(next.result).toBe(0n)
      })

      it('should be consistent for numeric and bigint initial state within the safe range', (): void => {
        const maxSafe: bigint = 2n ** 53n - 1n

        const fromBigInt: Counter = counter64(maxSafe),
          fromNumber: Counter = counter64(Number(maxSafe))

        expect(fromNumber.state).toBe(fromBigInt.state)
        expect(fromNumber.result).toBe(fromBigInt.result)
      })
    })

    describe('jump', (): void => {
      it('should match next() for a single forward step', (): void => {
        const base: Counter = counter64(),
          viaJump: Counter = base.jump(1),
          viaNext: Counter = base.next()

        expect(viaJump.state).toBe(viaNext.state)
        expect(viaJump.result).toBe(viaNext.result)
      })

      it('should match back() for a single backward step', (): void => {
        const base: Counter = counter64(),
          viaBack: Counter = base.back(),
          viaJump: Counter = base.jump(-1)

        expect(viaJump.state).toBe(viaBack.state)
        expect(viaJump.result).toBe(viaBack.result)
      })

      it('should allow a walker to catch up to a jumper', (): void => {
        const base: Counter = counter64(0),
          steps = 10,
          jumper: Counter = base.jump(steps)

        let walker: Counter = base.next()

        repeat((): void => {
          walker = walker.next()
        }, steps - 1)

        expect(walker.state).toBe(jumper.state)
        expect(walker.result).toBe(jumper.result)
      })

      it('should support full back-and-forth traversal via jump()', (): void => {
        const base: Counter = counter64(0),
          steps = 10,
          forward: Counter = base.jump(steps),
          backAgain: Counter = forward.jump(-steps),
          forwardAgain: Counter = backAgain.jump(steps)

        expect(backAgain.state).toBe(base.state)

        expect(forwardAgain.state).toBe(forward.state)
        expect(forwardAgain.result).toBe(forward.result)
      })
    })

    describe('immutability', (): void => {
      it('should not mutate previous snapshots', (): void => {
        const r0: Counter = counter64(),
          r1: Counter = r0.next(),
          r2: Counter = r1.next()

        expect(r0).not.toBe(r1)
        expect(r1).not.toBe(r2)

        expect(r0.state).toBe(0n)
        expect(r1.state).toBe(1n)
        expect(r2.state).toBe(2n)

        expect(r0.result).toBe(r0.state)
        expect(r1.result).toBe(r1.state)
        expect(r2.result).toBe(r2.state)
      })
    })

    describe('determinism', (): void => {
      it('should produce the same orbit from the same starting state', (): void => {
        let a: Counter = counter64(5),
          b: Counter = counter64(5)

        const seqA: bigint[] = [],
          seqB: bigint[] = [],
          steps = 8

        repeat((): void => {
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
  })
})
