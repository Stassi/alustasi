import Box from '@mui/material/Box'
import { type ReactElement, type ReactNode } from 'react'

export function AlignedRight({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        mt: 1,
        p: 1,
      }}
    >
      {children}
    </Box>
  )
}
