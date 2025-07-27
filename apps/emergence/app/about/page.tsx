import { type ReactElement } from 'react'
import Box from '@mui/material/Box'
import { ButtonLink } from '@repo/mui/components/ButtonLink'
import { Centered } from '@repo/mui/components/box/Centered'
import { Copyright } from '@repo/mui/components/Copyright'
import { PageContainer } from '@repo/mui/components/PageContainer'
import { ProTip } from '@repo/mui/components/ProTip'
import { Title } from '@repo/mui/components/Title'

export default function About(): ReactElement {
  return (
    <PageContainer>
      <Centered>
        <Title>Material UI - Next.js example in TypeScript</Title>
        <Box sx={{ maxWidth: 'sm' }}>
          <ButtonLink href="/">Go to the home page</ButtonLink>
        </Box>
        <ProTip />
        <Copyright />
      </Centered>
    </PageContainer>
  )
}
