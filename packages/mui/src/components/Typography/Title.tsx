import Typography from '@mui/material/Typography'
import { type ReactElement, type ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }): ReactElement {
  return (
    <Typography component="h1" sx={{ mb: 2 }} variant="h4">
      {children}
    </Typography>
  )
}
