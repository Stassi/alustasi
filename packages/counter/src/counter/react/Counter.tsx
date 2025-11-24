'use client'

import { type ReactElement } from 'react'

import { type UseCounter, useCounter } from '../../react/useCounter'

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
