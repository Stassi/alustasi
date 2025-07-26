import { type ReactElement } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NextLink from 'next/link'
import { CenteredContent } from '@repo/mui/components/CenteredContent'
import { Copyright } from '@repo/mui/components/Copyright'
import { ProTip } from '@repo/mui/components/ProTip'

export default function About(): ReactElement {
  return (
    <Container maxWidth="lg">
      <CenteredContent>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </CenteredContent>
    </Container>
  )
}
