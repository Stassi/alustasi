import { act, renderHook } from '@testing-library/react'

import { repeatCurried as repeat } from './repeat'
import { type UseCounter, useCounter } from './useCounter'

describe('useCounter', (): void => {
  it.each([
    { clicks: 3, expected: 1, start: -2 },
    { clicks: 2, expected: 2, start: 0 },
    { clicks: 4, expected: 5, start: 1 },
    { clicks: 0, expected: 3, start: 3 },
  ])(
    'increment $clicks clicks from $start to $expected',
    ({
      clicks,
      expected,
      start,
    }: Record<'clicks' | 'expected' | 'start', number>): void => {
      const { result } = renderHook((): UseCounter => useCounter(start)),
        incrementRepeatedly: (n: number) => void = repeat((): void => {
          result.current.increment()
        })

      act((): void => {
        incrementRepeatedly(clicks)
      })

      expect(result.current.count).toBe(expected)
    },
  )
})
