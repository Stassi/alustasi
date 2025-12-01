import { repeat } from '@repo/effects/repeat'

import {
  type Sequence64 as Counter64,
  counterSequence64 as counter64,
} from './sequence64/sequence64'

describe('Counter 64 (sequence)', (): void => {
  const over64: bigint = 2n ** 64n
  const max64: bigint = over64 - 1n

  it('should start at 0 by default', (): void => {
    const c0: Counter64 = counter64()

    expect(c0.state).toBe(0n)
    expect(c0.result).toBe(0n)
  })

  it('should apply uInt64 to the initial state', (): void => {
    const c: Counter64 = counter64(-1)

    expect(c.state).toBe(max64)
    expect(c.result).toBe(max64)
  })

  it('should treat result as the identity on state', (): void => {
    const c: Counter64 = counter64(42)

    expect(c.result).toBe(c.state)
  })

  describe('wrapping behavior', (): void => {
    it('should wrap backward from 0 to max64', (): void => {
      const base: Counter64 = counter64(0),
        back: Counter64 = base.back()

      expect(back.state).toBe(max64)
      expect(back.result).toBe(max64)
    })

    it('should wrap forward from max64 to 0', (): void => {
      const base: Counter64 = counter64(max64),
        next: Counter64 = base.next()

      expect(next.state).toBe(0n)
      expect(next.result).toBe(0n)
    })

    it('should be consistent for numeric and bigint initial state within the safe range', (): void => {
      const maxSafe: bigint = 2n ** 53n - 1n

      const fromBigInt: Counter64 = counter64(maxSafe),
        fromNumber: Counter64 = counter64(Number(maxSafe))

      expect(fromNumber.state).toBe(fromBigInt.state)
      expect(fromNumber.result).toBe(fromBigInt.result)
    })
  })

  describe('jump', (): void => {
    it('should match next() for a single forward step', (): void => {
      const base: Counter64 = counter64(),
        viaJump: Counter64 = base.jump(1),
        viaNext: Counter64 = base.next()

      expect(viaJump.state).toBe(viaNext.state)
      expect(viaJump.result).toBe(viaNext.result)
    })

    it('should match back() for a single backward step', (): void => {
      const base: Counter64 = counter64(),
        viaBack: Counter64 = base.back(),
        viaJump: Counter64 = base.jump(-1)

      expect(viaJump.state).toBe(viaBack.state)
      expect(viaJump.result).toBe(viaBack.result)
    })

    it('should allow a walker to catch up to a jumper', (): void => {
      const base: Counter64 = counter64(0),
        steps = 10,
        jumper: Counter64 = base.jump(steps)

      let walker: Counter64 = base.next()

      repeat((): void => {
        walker = walker.next()
      }, steps - 1)

      expect(walker.state).toBe(jumper.state)
      expect(walker.result).toBe(jumper.result)
    })

    it('should support full back-and-forth traversal via jump()', (): void => {
      const base: Counter64 = counter64(0),
        steps = 10,
        forward: Counter64 = base.jump(steps),
        backAgain: Counter64 = forward.jump(-steps),
        forwardAgain: Counter64 = backAgain.jump(steps)

      expect(backAgain.state).toBe(base.state)

      expect(forwardAgain.state).toBe(forward.state)
      expect(forwardAgain.result).toBe(forward.result)
    })
  })

  describe('immutability', (): void => {
    it('should not mutate previous snapshots', (): void => {
      const r0: Counter64 = counter64(),
        r1: Counter64 = r0.next(),
        r2: Counter64 = r1.next()

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
      let a: Counter64 = counter64(5),
        b: Counter64 = counter64(5)

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
