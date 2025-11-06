import { hex64 } from '@repo/64-bit/hex'
import { repeat } from '@repo/effects/repeat'

import { type SplitMix64, splitMix64 } from './splitMix'

describe('SplitMix 64', (): void => {
  const seed = 'test-seed',
    steps = 3

  it('should start with an undefined result', (): void => {
    expect(splitMix64({ seed }).result).toBeUndefined()
  })

  it('should produce deterministic sequences for the same seed', (): void => {
    let a: SplitMix64<bigint> = splitMix64({ seed }).next(),
      b: SplitMix64<bigint> = splitMix64({ seed }).next()

    const seqA: bigint[] = [],
      seqB: bigint[] = []

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

  describe('canonical vectors', (): void => {
    describe.each(
      Object.entries({
        // https://www.reddit.com/r/RNG/comments/idfxnd/bizarre_issue_implementing_xoshiro256/
        0: [
          'e220a8397b1dcdaf',
          '6e789e6aa1b965f4',
          '06c45d188009454f',
          'f88bb8a8724c81ec',
        ],
        1: [
          '910a2dec89025cc1',
          'beeb8da1658eec67',
          'f893a2eefb32555e',
          '71c18690ee42c90b',
        ],
      } as const),
    )('seed: %s', (seed: string, expected): void => {
      const res: string[] = []

      let prng: SplitMix64<bigint> = splitMix64({
        seed: BigInt(seed),
      }).next()

      repeat((): void => {
        res.push(hex64(prng.result))
        prng = prng.next()
      }, expected.length)

      it('should output vectors matching an external source', (): void => {
        expect(res).toStrictEqual(expected)
      })
    })
  })

  describe('immutability', (): void => {
    it('should returns a new instance on next()', (): void => {
      const r0: SplitMix64 = splitMix64({ seed }),
        r1: SplitMix64<bigint> = r0.next()

      expect(r1).not.toBe(r0)
      expect(r1.state).not.toBe(r0.state)

      expect(r0.result).toBeUndefined()
      expect(typeof r1.result).toBe('bigint')
    })

    it('should not mutate previous instances in a chain', (): void => {
      const r0: SplitMix64 = splitMix64({ seed }),
        r1: SplitMix64<bigint> = r0.next(),
        r2: SplitMix64<bigint> = r1.next()

      expect(r0.result).toBeUndefined()

      expect(typeof r1.result).toBe('bigint')
      expect(typeof r2.result).toBe('bigint')

      expect(r0).not.toBe(r1)
      expect(r1).not.toBe(r2)

      expect(r0.state).not.toBe(r1.state)
      expect(r1.state).not.toBe(r2.state)
    })
  })
})
