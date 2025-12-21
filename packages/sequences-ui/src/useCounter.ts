'use client'

import { type Orbit, counter, counter64 } from '@repo/sequences/orbit/orbit'
import { type Numeric } from '@repo/types/Numeric'
import { type Dispatch, type SetStateAction, useState } from 'react'

export type UseCounter = {
  count: bigint
  increment: () => void
}

export function useCounter(initialState: Numeric = 0): UseCounter {
  const [{ result: count }, setCounter]: [
    Orbit,
    Dispatch<SetStateAction<Orbit>>,
  ] = useState(counter(initialState))

  return {
    count,
    increment(): void {
      setCounter((previous: Orbit): Orbit => previous.next())
    },
  }
}

export function useCounter64(initialState: Numeric = 0): UseCounter {
  const [{ result: count }, setCounter]: [
    Orbit,
    Dispatch<SetStateAction<Orbit>>,
  ] = useState(counter64(initialState))

  return {
    count,
    increment(): void {
      setCounter((previous: Orbit): Orbit => previous.next())
    },
  }
}
