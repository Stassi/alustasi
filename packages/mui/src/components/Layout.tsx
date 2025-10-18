'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import {
  type CssVarsThemeOptions,
  type Theme,
  type ThemeProviderProps,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles'
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
  theme: {
    cssVariables: Pick<
      CssVarsThemeOptions,
      | 'colorSchemeSelector'
      | 'cssVarPrefix'
      | 'disableCssColorScheme'
      | 'rootSelector'
      | 'shouldSkipGeneratingVar'
    >
  } & Parameters<typeof createTheme>[0]
}): ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript
          defaultMode={defaultMode}
          {...{
            ...(colorSchemeSelector
              ? {
                  attribute: colorSchemeSelector,
                }
              : {}),
          }}
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
