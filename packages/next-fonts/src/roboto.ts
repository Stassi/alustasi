import { Roboto } from 'next/font/google'
import { type NextFont } from 'next/dist/compiled/@next/font'

export const roboto: NextFont = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})
