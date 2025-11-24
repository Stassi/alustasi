'use client'

import { type ReactElement } from 'react'

import { type UseCounter, useCounter, useCounter64 } from './useCounter'

export function Counter(): ReactElement {
  const { count, increment }: UseCounter = useCounter()

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment} type="button">
        +
      </button>
    </>
  )
}

export function Counter64(): ReactElement {
  const { count, increment }: UseCounter = useCounter64()

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment} type="button">
        +
      </button>
    </>
  )
}
