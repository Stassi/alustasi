import { type ReactElement } from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { LightBulb } from '../icons/LightBulb'

export function ProTip(): ReactElement {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
      <LightBulb sx={{ mr: 1, verticalAlign: 'middle' }} />
      {'Pro tip: See more '}
      <Link href="https://mui.com/material-ui/getting-started/templates/">
        templates
      </Link>
      {' in the Material UI documentation.'}
    </Typography>
  )
}
