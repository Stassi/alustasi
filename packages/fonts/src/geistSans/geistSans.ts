import localFont from 'next/font/local'
import { type NextFontWithVariable } from 'next/dist/compiled/@next/font'

export const geistSans: NextFontWithVariable = localFont({
  src: './geistSans.woff',
  variable: '--font-geist-sans',
})
