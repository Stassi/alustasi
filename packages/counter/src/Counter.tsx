'use client'

import { type ReactElement } from 'react'

import { type UseCounter, useCounter } from './useCounter'

export function Counter(): ReactElement {
  const { count, increment }: UseCounter = useCounter(0)

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment} type="button">
        +
      </button>
    </>
  )
}
