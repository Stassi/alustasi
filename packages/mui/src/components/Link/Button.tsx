import { type ReactElement, type ReactNode } from 'react'
import MuiButton from '@mui/material/Button'
import NextLink from 'next/link'

export function Button({
  children,
  href,
}: {
  children: ReactNode
  href: string
}): ReactElement {
  return (
    <MuiButton component={NextLink} href={href} variant="contained">
      {children}
    </MuiButton>
  )
}
