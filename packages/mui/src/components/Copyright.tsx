import { type ReactElement } from 'react'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

export function Copyright(): ReactElement {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
