import { repeatCurried as repeat } from '@repo/effects/repeat'
import { act, renderHook } from '@testing-library/react'

import { type UseCounter, useCounter } from './useCounter'

describe('useCounter', (): void => {
  it.each([
    { clicks: 3, expected: 1n, start: -2n },
    { clicks: 2, expected: 2n, start: 0n },
    { clicks: 0, expected: 0xffff_ffff_ffff_ffffn, start: -1n },
    { clicks: 4, expected: 5n, start: 1n },
    { clicks: 0, expected: 3n, start: 3n },
  ] as const)(
    'increment $clicks clicks from $start to $expected',
    ({ clicks, expected, start }): void => {
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
