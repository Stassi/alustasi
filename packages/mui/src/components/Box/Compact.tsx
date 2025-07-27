import { type ReactElement, type ReactNode } from 'react'
import Box from '@mui/material/Box'

export function Compact({ children }: { children: ReactNode }): ReactElement {
  return <Box sx={{ maxWidth: 'sm' }}>{children}</Box>
}
