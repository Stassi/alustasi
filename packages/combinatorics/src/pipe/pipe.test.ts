import { pipe } from './pipe'

describe('Pipe', (): void => {
  it('should compose unary functions from left to right', (): void => {
    expect(
      pipe([
        (x: number): number => x + 1,
        (x: number): number => x * 2,
        (x: number): number => x + 1,
      ])(1),
    ).toBe(5)
  })

  it('should be variadic and accept multiple arguments', (): void => {
    expect(
      pipe([
        (a: number, b: number): number => a + b,
        (x: number): number => x * x,
      ])(2, 3),
    ).toBe(25)
  })

  it('should support changing types across steps', (): void => {
    expect(
      pipe([
        (a: number, b: number): number => a + b,
        (n: number): string => String(n),
        (s: string): number => s.length,
        (n: number): boolean => n % 2 === 0,
      ])(1, 2),
    ).toBe(false)
  })
})
