import { add, addCurried } from './add'

describe('Addition', (): void => {
  const a = 1,
    b = 2,
    result = 3

  it('should add 1 + 2 to equal 3', (): void => {
    expect(add(a, b)).toBe(result)
  })

  describe('curried', (): void => {
    it('should add 1 + 2 to equal 3', (): void => {
      expect(addCurried(a)(b)).toBe(result)
    })
  })
})
