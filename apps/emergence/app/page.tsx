import { type ReactElement } from 'react'
import { Centered } from '@repo/mui/components/box/Centered'
import { Copyright } from '@repo/mui/components/Copyright'
import { PageContainer } from '@repo/mui/components/PageContainer'
import { ProTip } from '@repo/mui/components/ProTip'
import { SecondaryLink } from '@repo/mui/components/SecondaryLink'
import { Title } from '@repo/mui/components/Title'

export default function Home(): ReactElement {
  return (
    <PageContainer>
      <Centered>
        <Title>Material UI - Next.js App Router example in TypeScript</Title>
        <SecondaryLink href="/about">Go to the about page</SecondaryLink>
        <ProTip />
        <Copyright />
      </Centered>
    </PageContainer>
  )
}
