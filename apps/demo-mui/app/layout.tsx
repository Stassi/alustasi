import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { type ThemeOptions } from '@mui/material/styles'
import { roboto } from '@repo/fonts/roboto'
import { ModeSwitch } from '@repo/mui/components/ModeSwitch'
import { MuiProviders } from '@repo/mui/components/MuiProviders'
import { type ReactElement, type ReactNode } from 'react'

const colorSchemeSelector = 'class' as const,
  defaultMode = 'system' as const,
  theme = {
    colorSchemes: { dark: true, light: true },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: {
            variants: [
              {
                props: { severity: 'info' },
                style: {
                  backgroundColor: '#60a5fa',
                },
              },
            ],
          },
        },
      },
    },
    cssVariables: {
      colorSchemeSelector,
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  } satisfies ThemeOptions

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript
          attribute={colorSchemeSelector}
          defaultMode={defaultMode}
        />
        <MuiProviders defaultMode={defaultMode} theme={theme}>
          <ModeSwitch />
          {children}
        </MuiProviders>
      </body>
    </html>
  )
}
