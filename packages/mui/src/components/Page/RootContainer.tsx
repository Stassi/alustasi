import Container from '@mui/material/Container'
import { type ReactElement, type ReactNode } from 'react'

export function RootContainer({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return <Container maxWidth="lg">{children}</Container>
}
