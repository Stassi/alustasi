import { type NextFontWithVariable } from 'next/dist/compiled/@next/font'
import localFont from 'next/font/local'

export const geistSans: NextFontWithVariable = localFont({
  src: './geistSans.woff',
  variable: '--font-geist-sans',
})
