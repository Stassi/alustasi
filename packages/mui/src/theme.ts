'use client'
import {
  createTheme,
  type CssVarsThemeOptions,
  type Theme,
} from '@mui/material/styles'
import { roboto } from '@repo/fonts/roboto'

export function theme({
  colorSchemeSelector,
}: {
  colorSchemeSelector: CssVarsThemeOptions['colorSchemeSelector']
}): Theme {
  return createTheme({
    colorSchemes: { light: true, dark: true },
    cssVariables: {
      colorSchemeSelector,
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
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
  })
}
