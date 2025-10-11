import { type ReactElement, type ReactNode } from 'react'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
