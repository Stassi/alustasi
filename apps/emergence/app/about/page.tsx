import { type ReactElement } from 'react'
import { AlignedCenter } from '@repo/mui/components/box/AlignedCenter'
import { Button as Link } from '@repo/mui/components/link/Button'
import { Compact } from '@repo/mui/components/box/Compact'
import { Copyright } from '@repo/mui/components/Copyright'
import { ProTip } from '@repo/mui/components/ProTip'
import { RootContainer } from '@repo/mui/components/RootContainer'
import { Title } from '@repo/mui/components/typography/Title'

export default function About(): ReactElement {
  return (
    <RootContainer>
      <AlignedCenter>
        <Title>Material UI - Next.js example in TypeScript</Title>
        <Compact>
          <Link href="/">Go to the home page</Link>
        </Compact>
        <ProTip />
        <Copyright />
      </AlignedCenter>
    </RootContainer>
  )
}
