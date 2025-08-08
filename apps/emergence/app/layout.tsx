import { roboto } from '@repo/fonts/roboto'
import { Layout } from '@repo/mui/components/Layout'
import { ModeSwitch } from '@repo/mui/components/ModeSwitch'
import { type ReactElement, type ReactNode } from 'react'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <Layout
      theme={{
        colorSchemes: { light: true, dark: true },
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
          colorSchemeSelector: 'class',
        },
        typography: {
          fontFamily: roboto.style.fontFamily,
        },
      }}
    >
      <ModeSwitch />
      {children}
    </Layout>
  )
}
