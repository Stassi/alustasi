import Image, { type ImageProps } from 'next/image'
import { type ReactElement } from 'react'

export function ThemeImage({
  srcDark,
  srcLight,
  ...rest
}: {
  srcDark: string
  srcLight: string
} & Omit<ImageProps, 'src'>): ReactElement {
  return (
    <>
      <Image {...rest} className="imgLight" src={srcLight} />
      <Image {...rest} className="imgDark" src={srcDark} />
    </>
  )
}
