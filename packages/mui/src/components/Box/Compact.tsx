import Box from '@mui/material/Box'
import { type ReactElement, type ReactNode } from 'react'

export function Compact({ children }: { children: ReactNode }): ReactElement {
  return <Box sx={{ maxWidth: 'sm' }}>{children}</Box>
}
