import { type ReactElement } from 'react'
import { Button as Link } from '@repo/mui/components/link/Button'
import { Centered } from '@repo/mui/components/box/Centered'
import { Compact } from '@repo/mui/components/box/Compact'
import { Copyright } from '@repo/mui/components/Copyright'
import { PageContainer } from '@repo/mui/components/PageContainer'
import { ProTip } from '@repo/mui/components/ProTip'
import { Title } from '@repo/mui/components/typography/Title'

export default function About(): ReactElement {
  return (
    <PageContainer>
      <Centered>
        <Title>Material UI - Next.js example in TypeScript</Title>
        <Compact>
          <Link href="/">Go to the home page</Link>
        </Compact>
        <ProTip />
        <Copyright />
      </Centered>
    </PageContainer>
  )
}
