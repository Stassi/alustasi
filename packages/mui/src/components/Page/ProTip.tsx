import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { type ReactElement } from 'react'

import { LightBulb } from '../../icons/LightBulb'

export function ProTip(): ReactElement {
  return (
    <Typography sx={{ color: 'text.secondary', mb: 3, mt: 6 }}>
      <LightBulb sx={{ mr: 1, verticalAlign: 'middle' }} />
      {'Pro tip: See more '}
      <Link href="https://mui.com/material-ui/getting-started/templates/">
        templates
      </Link>
      {' in the Material UI documentation.'}
    </Typography>
  )
}
