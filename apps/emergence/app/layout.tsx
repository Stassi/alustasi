import { type ReactElement, type ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { theme } from '@repo/mui/theme'
import { ThemeSwitch } from '@repo/mui/components/ThemeSwitch'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ThemeSwitch />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
