import { type NextFontWithVariable } from 'next/dist/compiled/@next/font'
import localFont from 'next/font/local'

export const geistMono: NextFontWithVariable = localFont({
  src: './geistMono.woff',
  variable: '--font-geist-mono',
})
