import { type ReactElement } from 'react'
import { AlignedCenter } from '@repo/mui/components/box/AlignedCenter'
import { Copyright } from '@repo/mui/components/Copyright'
import { ProTip } from '@repo/mui/components/ProTip'
import { RootContainer } from '@repo/mui/components/RootContainer'
import { Secondary as Link } from '@repo/mui/components/link/Secondary'
import { Title } from '@repo/mui/components/typography/Title'

export default function Home(): ReactElement {
  return (
    <RootContainer>
      <AlignedCenter>
        <Title>Material UI - Next.js App Router example in TypeScript</Title>
        <Link href="/about">Go to the about page</Link>
        <ProTip />
        <Copyright />
      </AlignedCenter>
    </RootContainer>
  )
}
