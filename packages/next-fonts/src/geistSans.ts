import localFont from 'next/font/local'
import { type NextFontWithVariable } from 'next/dist/compiled/@next/font'

const geistSans: NextFontWithVariable = localFont({
  src: './woff/GeistVF.woff',
  variable: '--font-geist-sans',
})

export default geistSans
