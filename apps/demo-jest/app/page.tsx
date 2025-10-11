import { type Metadata } from 'next'
import { type ReactElement } from 'react'

export const metadata: Metadata = {
  title: 'App Router',
}

export default function Page(): ReactElement {
  return <h1>App Router</h1>
}
