import localFont from 'next/font/local'
import { type NextFontWithVariable } from 'next/dist/compiled/@next/font'

const geistMono: NextFontWithVariable = localFont({
  src: './woff/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export default geistMono
