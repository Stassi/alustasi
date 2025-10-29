import { bigInt64 } from './bigInt'

describe('BigInt64', (): void => {
  const over64: bigint = 2n ** 64n,
    max64: bigint = over64 - 1n

  describe('number', (): void => {
    it.each([
      { expected: 0n, n: 0, name: '0 (number)' },
      { expected: 1n, n: 1, name: '1 (number)' },
      { expected: 255n, n: 255, name: '255 (number)' },
    ] as const)(
      'should convert $name to a 64-bit unsigned bigint',
      ({ expected, n }): void => {
        expect(bigInt64(n)).toBe(expected)
      },
    )
  })

  describe('64-bit bigint', (): void => {
    it.each([
      { expected: 123n, n: 123n, name: '123n' },
      { expected: max64, n: max64, name: '2^64 - 1' },
    ] as const)(
      'should appear to return unchanged the 64-bit unsigned bigint $name',
      ({ expected, n }): void => {
        expect(bigInt64(n)).toBe(expected)
      },
    )
  })

  describe('modulo 2^64 bigint wrapping', (): void => {
    it.each([
      { expected: 0n, n: over64, name: '2^64' },
      { expected: 5n, n: over64 + 5n, name: '2^64 + 5n' },
    ] as const)(
      'should wrap $name to the 64-bit unsigned bigint $expected',
      ({ expected, n }): void => {
        expect(bigInt64(n)).toBe(expected)
      },
    )
  })

  describe('negative sign bigint|number', (): void => {
    it.each([
      { expected: max64, n: -1 as number, name: '-1 (number)' },
      { expected: max64, n: -1, name: '-1 (number literal)' },
      { expected: 0n, n: -over64, name: '-(2^64)' },
      { expected: max64 - 6n, n: -(over64 + 7n), name: '-(2^64 + 7n)' },
    ] as const)(
      'should convert $name to the 64-bit unsigned bigint $expected',
      ({ expected, n }): void => {
        expect(bigInt64(n)).toBe(expected)
      },
    )
  })
})
