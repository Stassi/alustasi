import { type ReactElement } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NextLink from 'next/link'
import { CenteredContent } from '@repo/mui/components/CenteredContent'
import { Copyright } from '@repo/mui/components/Copyright'
import { PageContainer } from '@repo/mui/components/PageContainer'
import { ProTip } from '@repo/mui/components/ProTip'
import { Title } from '@repo/mui/components/Title'

export default function About(): ReactElement {
  return (
    <PageContainer>
      <CenteredContent>
        <Title>Material UI - Next.js example in TypeScript</Title>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </CenteredContent>
    </PageContainer>
  )
}
