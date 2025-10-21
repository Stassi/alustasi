import { type Metadata } from 'next'
import { type ReactElement } from 'react'

import { Counter } from './Counter'

export const metadata: Metadata = {
  title: 'App Router',
}

export default function Page(): ReactElement {
  return (
    <>
      <h1>App Router</h1>

      <h2>Counter</h2>
      <Counter />
    </>
  )
}
