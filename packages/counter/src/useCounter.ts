import { increment } from '@repo/arithmetic/increment'
import { type Dispatch, type SetStateAction, useState } from 'react'

export function useCounter(initialState: number): {
  count: number
  increment: () => void
} {
  const [count, setCount]: [number, Dispatch<SetStateAction<number>>] =
    useState(initialState)

  return {
    count,
    increment(): void {
      setCount((previous: number): number => increment(previous))
    },
  }
}
