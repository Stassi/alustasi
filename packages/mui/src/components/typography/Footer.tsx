import { type ReactElement, type ReactNode } from 'react'
import Typography from '@mui/material/Typography'

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
