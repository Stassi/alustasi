import { type ReactElement, type ReactNode } from 'react'
import { AlignedCenter } from '../box/AlignedCenter'
import { Copyright } from './Copyright'
import { ProTip } from './ProTip'
import { RootContainer } from './RootContainer'
import { Title } from '../typography/Title'

export function Page({
  children,
  titleText,
}: {
  children: ReactNode
  titleText: `Material UI - Next.js ${string}`
}): ReactElement {
  return (
    <RootContainer>
      <AlignedCenter>
        <Title>{titleText}</Title>
        {children}
        <ProTip />
        <Copyright />
      </AlignedCenter>
    </RootContainer>
  )
}
