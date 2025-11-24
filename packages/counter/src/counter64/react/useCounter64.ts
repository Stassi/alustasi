'use client'

import { type Numeric } from '@repo/types/Numeric'
import { type Dispatch, type SetStateAction, useState } from 'react'

import { type Counter, counter64 } from '../../counter'

export type UseCounter64 = {
  count: bigint
  increment: () => void
}

export function useCounter64(initialState: Numeric = 0): UseCounter64 {
  const [{ result: count }, setCounter]: [
    Counter,
    Dispatch<SetStateAction<Counter>>,
  ] = useState(counter64(initialState))

  return {
    count,
    increment(): void {
      setCounter((previous: Counter): Counter => previous.next())
    },
  }
}
