import MuiLink from '@mui/material/Link'
import { type ReactElement } from 'react'
import { Footer } from '../Typography/Footer'

export function Copyright(): ReactElement {
  return (
    <Footer>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Footer>
  )
}
