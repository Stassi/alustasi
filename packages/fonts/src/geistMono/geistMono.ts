import localFont from 'next/font/local'
import { type NextFontWithVariable } from 'next/dist/compiled/@next/font'

export const geistMono: NextFontWithVariable = localFont({
  src: './geistMono.woff',
  variable: '--font-geist-mono',
})
