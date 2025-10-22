import { repeat, repeatCurried } from './repeat'

describe('Repeat', (): void => {
  const expected = 3

  it('should perform the effect n times', (): void => {
    let count = 0

    repeat((): void => {
      count++
    }, expected)

    expect(count).toBe(expected)
  })

  it('should not perform the effect when n is 0', (): void => {
    let count = 0

    repeat((): void => {
      count++
    }, 0)

    expect(count).toBe(0)
  })

  describe('curried', (): void => {
    it('should perform the effect n times', (): void => {
      let count = 0

      repeatCurried((): void => {
        count++
      })(expected)

      expect(count).toBe(expected)
    })
  })
})
