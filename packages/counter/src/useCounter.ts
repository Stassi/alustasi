'use client'

import { type Numeric } from '@repo/types/Numeric'
import { type Dispatch, type SetStateAction, useState } from 'react'

import { type Counter64, counter64 } from './counter64/counter64'

export type UseCounter = {
  count: bigint
  increment: () => void
}

export function useCounter(initialState: Numeric): UseCounter {
  const [{ result: count }, setCounter]: [
    Counter64,
    Dispatch<SetStateAction<Counter64>>,
  ] = useState(counter64(initialState))

  return {
    count,
    increment(): void {
      setCounter((previous: Counter64): Counter64 => previous.next())
    },
  }
}
