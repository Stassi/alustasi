import MuiLink from '@mui/material/Link'
import { type ReactElement, useState } from 'react'

import { Footer } from '../Typography/Footer'

export function Copyright(): ReactElement {
  const [fullYear] = useState((): string => String(new Date().getFullYear()))

  return (
    <Footer>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        Your Website
      </MuiLink>
      {` ${fullYear}.`}
    </Footer>
  )
}
