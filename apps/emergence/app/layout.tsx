import { type ReactElement, type ReactNode } from 'react'
import { Layout } from '@repo/mui/components/Layout'
import { ModeSwitch } from '@repo/mui/components/ModeSwitch'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <Layout>
      <ModeSwitch />
      {children}
    </Layout>
  )
}
