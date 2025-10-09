import Link from 'next/link'
import { type ReactElement } from 'react'

export default function Page(): ReactElement {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </div>
  )
}
