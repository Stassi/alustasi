import { type ReactElement, type ReactNode } from 'react'
import MuiLink from '@mui/material/Link'
import NextLink from 'next/link'

export function Secondary({
  children,
  href,
}: {
  children: ReactNode
  href: string
}): ReactElement {
  return (
    <MuiLink color="secondary" component={NextLink} href={href}>
      {children}
    </MuiLink>
  )
}
