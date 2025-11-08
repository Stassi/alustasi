// noinspection JSSuspiciousNameCombination

import { xor } from './xor'

describe.each([
  { expected: 0, x: 0, y: 0 },
  { expected: 1, x: 0, y: 1 },
  { expected: 0, x: 1, y: 1 },
  { expected: 0xff, x: 0xf0, y: 0x0f },
  {
    expected: -0x348c_348d,
    x: 0x0bad_c0de,
    y: 0xc0de_0bad,
  },
  {
    expected: -0x6aaeeaa7,
    x: 0x12345678,
    y: 0x87654321,
  },
  { expected: 0n, x: 0n, y: 0n },
  { expected: 1n, x: 1n, y: 0n },
  { expected: 0n, x: 1n, y: 1n },
  {
    expected: 0xedcb_a987_6543_210fn,
    x: 0xffff_ffff_ffff_ffffn,
    y: 0x1234_5678_9abc_def0n,
  },
] as const)('Xor', ({ expected, x, y }): void => {
  const [strExpected = '', strX = '', strY = ''] = [expected, x, y].map(String)

  describe('evaluation', (): void => {
    it(`should be satisfied by ${strX} ^ ${strY} === ${strExpected}`, (): void => {
      expect(xor(x, y)).toBe(expected)
    })
  })

  describe('commutativity', (): void => {
    it(`should be satisfied by ${strX} ^ ${strY} === ${strY} ^ ${strX}`, (): void => {
      expect(xor(x, y)).toBe(xor(y, x))
    })
  })

  describe('inversion', (): void => {
    it(`should be satisfied by ${strX} ^ ${strX} === 0`, (): void => {
      expect(xor(x, x)).toBe(typeof x === 'bigint' ? 0n : 0)
    })

    it(`should be satisfied by ${strY} ^ ${strY} === 0`, (): void => {
      expect(xor(y, y)).toBe(typeof y === 'bigint' ? 0n : 0)
    })
  })
})
