import { type ReactElement, type ReactNode } from 'react'
import Container from '@mui/material/Container'

export function RootContainer({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return <Container maxWidth="lg">{children}</Container>
}
