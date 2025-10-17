import { add } from './add.js'

describe('Addition', (): void => {
  it('should add 1 + 2 to equal 3', (): void => {
    expect(add(1, 2)).toBe(3)
  })
})
