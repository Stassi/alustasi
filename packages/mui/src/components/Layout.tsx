'use client'
import CssBaseline from '@mui/material/CssBaseline'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import {
  ThemeProvider,
  createTheme,
  type CssVarsThemeOptions,
  type Theme,
  type ThemeProviderProps,
} from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { type ReactElement, type ReactNode } from 'react'

export function Layout({
  children,
  defaultMode = 'system',
  theme,
  theme: {
    cssVariables: { colorSchemeSelector },
  },
}: {
  children: ReactNode
  defaultMode?: ThemeProviderProps<Theme>['defaultMode']
  theme: Parameters<typeof createTheme>[0] & {
    cssVariables: Pick<
      CssVarsThemeOptions,
      | 'colorSchemeSelector'
      | 'cssVarPrefix'
      | 'disableCssColorScheme'
      | 'rootSelector'
      | 'shouldSkipGeneratingVar'
    >
  }
}): ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript
          attribute={colorSchemeSelector}
          defaultMode={defaultMode}
        />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider defaultMode={defaultMode} theme={createTheme(theme)}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
