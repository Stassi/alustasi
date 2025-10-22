'use client'

import MuiLink from '@mui/material/Link'
import NextLink from 'next/link'
import { type ReactElement, type ReactNode } from 'react'

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
