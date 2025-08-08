import Typography from '@mui/material/Typography'
import { type ReactElement, type ReactNode } from 'react'

export function Footer({ children }: { children: ReactNode }): ReactElement {
  return (
    <Typography
      align="center"
      sx={{
        color: 'text.secondary',
      }}
      variant="body2"
    >
      {children}
    </Typography>
  )
}
