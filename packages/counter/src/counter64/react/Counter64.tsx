'use client'

import { type ReactElement } from 'react'

import { type UseCounter, useCounter64 } from '../../react/useCounter'

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
