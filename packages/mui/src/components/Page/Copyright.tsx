import { type ReactElement } from 'react'
import MuiLink from '@mui/material/Link'
import { Footer } from '../typography/Footer'

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
