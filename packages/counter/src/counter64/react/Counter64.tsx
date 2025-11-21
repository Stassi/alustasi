'use client'

import { type ReactElement } from 'react'

import { type UseCounter64, useCounter64 } from './useCounter64'

export function Counter64(): ReactElement {
  const { count, increment }: UseCounter64 = useCounter64()

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment} type="button">
        +
      </button>
    </>
  )
}
