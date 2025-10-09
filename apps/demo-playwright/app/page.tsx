import Link from 'next/link'
import { type ReactElement } from 'react'

export default function Page(): ReactElement {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
