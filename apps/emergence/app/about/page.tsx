import { Compact } from '@repo/mui/components/Box/Compact'
import { Button as Link } from '@repo/mui/components/Link/Button'
import { Page } from '@repo/mui/components/Page/Page'
import { type ReactElement } from 'react'

export default function About(): ReactElement {
  return (
    <Page titleText={'Material UI - Next.js example in TypeScript'}>
      <Compact>
        <Link href="/">Go to the home page</Link>
      </Compact>
    </Page>
  )
}
