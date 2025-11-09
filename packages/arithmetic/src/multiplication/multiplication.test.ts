import { multiply } from './multiply'
import { multiplyCurried } from './multiplyCurried'

describe('Multiplication', (): void => {
  const a = 2,
    b = 3,
    result = 6

  it('should multiply 2 * 3 to equal 6', (): void => {
    expect(multiply(a, b)).toBe(result)
  })

  describe('curried', (): void => {
    it('should multiply 2 * 3 to equal 6', (): void => {
      expect(multiplyCurried(a)(b)).toBe(result)
    })
  })
})
