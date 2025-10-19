'use client'

import { type ReactElement } from 'react'

import { useCounter } from './useCounter.js'

export default function Counter(): ReactElement {
  const { count, increment } = useCounter(0)

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment} type="button">
        +
      </button>
    </>
  )
}
