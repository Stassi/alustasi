import { type ReactElement, type ReactNode } from 'react'
import Button from '@mui/material/Button'
import NextLink from 'next/link'

export function ButtonLink({
  children,
  href,
}: {
  children: ReactNode
  href: string
}): ReactElement {
  return (
    <Button component={NextLink} href={href} variant="contained">
      {children}
    </Button>
  )
}
