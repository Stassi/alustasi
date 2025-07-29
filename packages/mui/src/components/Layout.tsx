'use client'
import { type ReactElement, type ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import {
  type CssVarsThemeOptions,
  type Theme,
  type ThemeProviderProps,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme'

export function Layout({
  children,
  colorSchemeSelector = 'class',
  defaultMode = 'system',
}: {
  children: ReactNode
  colorSchemeSelector?: CssVarsThemeOptions['colorSchemeSelector']
  defaultMode?: ThemeProviderProps<Theme>['defaultMode']
}): ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript
          attribute={colorSchemeSelector}
          defaultMode={defaultMode}
        />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider
            defaultMode={defaultMode}
            theme={theme({ colorSchemeSelector })}
          >
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
