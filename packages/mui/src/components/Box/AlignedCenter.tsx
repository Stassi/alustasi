import Box from '@mui/material/Box'
import { type ReactElement, type ReactNode } from 'react'

export function AlignedCenter({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        my: 4,
      }}
    >
      {children}
    </Box>
  )
}
