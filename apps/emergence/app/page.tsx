import { type ReactElement } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import { CenteredContent } from '@repo/mui/components/CenteredContent'
import { Copyright } from '@repo/mui/components/Copyright'
import { ProTip } from '@repo/mui/components/ProTip'

export default function Home(): ReactElement {
  return (
    <Container maxWidth="lg">
      <CenteredContent>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App Router example in TypeScript
        </Typography>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </CenteredContent>
    </Container>
  )
}
