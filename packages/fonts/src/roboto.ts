import { type NextFont } from 'next/dist/compiled/@next/font'
import { Roboto } from 'next/font/google'

export const roboto: NextFont = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})
