'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import {
  type Theme,
  type ThemeOptions,
  type ThemeProviderProps,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles'
import { type ReactElement, type ReactNode, useMemo } from 'react'

export function MuiProviders({
  children,
  defaultMode = 'system',
  theme,
}: {
  children: ReactNode
  defaultMode?: ThemeProviderProps<Theme>['defaultMode']
  theme: ThemeOptions
}): ReactElement {
  const muiTheme: Theme = useMemo((): Theme => createTheme(theme), [theme])

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider defaultMode={defaultMode} theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
