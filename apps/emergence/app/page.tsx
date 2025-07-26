import { type ReactElement } from 'react'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import { CenteredContent } from '@repo/mui/components/CenteredContent'
import { Copyright } from '@repo/mui/components/Copyright'
import { ProTip } from '@repo/mui/components/ProTip'
import { Title } from '@repo/mui/components/Title'

export default function Home(): ReactElement {
  return (
    <Container maxWidth="lg">
      <CenteredContent>
        <Title>Material UI - Next.js App Router example in TypeScript</Title>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </CenteredContent>
    </Container>
  )
}
