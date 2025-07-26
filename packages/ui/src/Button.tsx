'use client'

import { type ReactElement, type ReactNode } from 'react'

export function Button({
  appName,
  children,
  className,
}: {
  appName: string
  children: ReactNode
  className?: string
}): ReactElement {
  return (
    <button
      className={className}
      onClick={(): void => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  )
}
