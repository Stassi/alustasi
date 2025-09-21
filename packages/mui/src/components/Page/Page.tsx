import { type ReactElement, type ReactNode } from 'react'

import { AlignedCenter } from '../Box/AlignedCenter'
import { Title } from '../Typography/Title'
import { Copyright } from './Copyright'
import { ProTip } from './ProTip'
import { RootContainer } from './RootContainer'

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
