'use client'

import { counter } from '@repo/sequences/counter'
import { counter64 } from '@repo/sequences/counter64'
import { type Orbit as Counter } from '@repo/sequences/orbit/orbit'
import { type Numeric } from '@repo/types/Numeric'
import { type Dispatch, type SetStateAction, useState } from 'react'

export type UseCounter = {
  count: bigint
  increment: () => void
}

export function useCounter(initialState: Numeric = 0): UseCounter {
  const [{ result: count }, setCounter]: [
    Counter,
    Dispatch<SetStateAction<Counter>>,
  ] = useState(counter(initialState))

  return {
    count,
    increment(): void {
      setCounter((previous: Counter): Counter => previous.next())
    },
  }
}

export function useCounter64(initialState: Numeric = 0): UseCounter {
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
