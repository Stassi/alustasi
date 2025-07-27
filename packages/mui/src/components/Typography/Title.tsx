import { type ReactElement, type ReactNode } from 'react'
import Typography from '@mui/material/Typography'

export function Title({ children }: { children: ReactNode }): ReactElement {
  return (
    <Typography component="h1" sx={{ mb: 2 }} variant="h4">
      {children}
    </Typography>
  )
}
