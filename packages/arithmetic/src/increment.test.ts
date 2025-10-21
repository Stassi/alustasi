import { increment } from './increment'

describe('Increment', (): void => {
  it('should increment 1 to equal 2', (): void => {
    expect(increment(1)).toBe(2)
  })
})
