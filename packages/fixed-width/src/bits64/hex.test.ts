import { hex64 } from './hex'

describe('Hex64', (): void => {
  describe('formatting', (): void => {
    it.each([
      { expected: '0000000000000000', n: 0n, name: '0n' },
      { expected: '0000000000000001', n: 1n, name: '1n' },
      { expected: '00000000000000ff', n: 255, name: '255 (number)' },
      { expected: '000000001234abcd', n: 0x1234_abcdn, name: '0x1234_abcdn' },
      {
        expected: 'ffffffffffffffff',
        n: 0xffff_ffff_ffff_ffffn,
        name: 'max (2^64-1)',
      },
    ] as const)(
      'should format $name to the 16-width string $expected',
      ({ expected, n }): void => {
        expect(hex64(n)).toBe(expected)
      },
    )
  })

  describe('fixed width', (): void => {
    it.each([
      { n: 0xan, name: '0xan' },
      { n: 0x1020n, name: '0x1020n' },
      { n: 0xf0f0_f0f0n, name: '0xf0f0_f0f0n' },
    ] as const)('should convert $name to a 16-width string', ({ n }): void => {
      expect(hex64(n)).toHaveLength(16)
    })
  })
})
