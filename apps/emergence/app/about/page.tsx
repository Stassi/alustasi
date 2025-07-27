import { type ReactElement } from 'react'
import { Button as Link } from '@repo/mui/components/link/Button'
import { Compact } from '@repo/mui/components/box/Compact'
import { Page } from '@repo/mui/components/Page'

export default function About(): ReactElement {
  return (
    <Page titleText={'Material UI - Next.js example in TypeScript'}>
      <Compact>
        <Link href="/">Go to the home page</Link>
      </Compact>
    </Page>
  )
}
