import { add } from './add'

describe('Server-only (Node.js)', (): void => {
  it('should evaluate 1+2==3', (): void => {
    expect(add(1, 2)).toBe(3)
  })
})
