'use client'

import {
  type Dispatch,
  type ReactElement,
  type SetStateAction,
  useState,
} from 'react'

export default function Counter(): ReactElement {
  const [count, setCount]: [number, Dispatch<SetStateAction<number>>] =
    useState(0)

  return (
    <>
      <h2>{count}</h2>
      <button
        onClick={(): void => {
          setCount(count + 1)
        }}
        type="button"
      >
        +
      </button>
    </>
  )
}
