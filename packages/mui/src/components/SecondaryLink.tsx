import { type ReactElement, type ReactNode } from 'react'
import Link from '@mui/material/Link'
import NextLink from 'next/link'

export function SecondaryLink({
  children,
  href,
}: {
  children: ReactNode
  href: string
}): ReactElement {
  return (
    <Link color="secondary" component={NextLink} href={href}>
      {children}
    </Link>
  )
}
