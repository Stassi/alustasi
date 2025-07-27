import { type ReactElement } from 'react'
import { Page } from '@repo/mui/components/Page/Page'
import { Secondary as Link } from '@repo/mui/components/Link/Secondary'

export default function Home(): ReactElement {
  return (
    <Page titleText={'Material UI - Next.js App Router example in TypeScript'}>
      <Link href="/about">Go to the about page</Link>
    </Page>
  )
}
