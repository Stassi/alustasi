import { type ReactElement } from 'react'
import { Page } from '@repo/mui/components/Page'
import { Secondary as Link } from '@repo/mui/components/link/Secondary'

export default function Home(): ReactElement {
  return (
    <Page titleText={'Material UI - Next.js App Router example in TypeScript'}>
      <Link href="/about">Go to the about page</Link>
    </Page>
  )
}
