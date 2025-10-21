'use client'

import { increment } from '@repo/arithmetic/increment'
import { type Dispatch, type SetStateAction, useState } from 'react'

export type UseCounter = {
  count: number
  increment: () => void
}

export function useCounter(initialState: number): UseCounter {
  const [count, setCount]: [number, Dispatch<SetStateAction<number>>] =
    useState(initialState)

  return {
    count,
    increment(): void {
      setCount((previous: number): number => increment(previous))
    },
  }
}
