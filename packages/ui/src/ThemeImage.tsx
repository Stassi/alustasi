import { type ReactElement } from 'react'
import Image, { type ImageProps } from 'next/image'

export function ThemeImage({
  srcDark,
  srcLight,
  ...rest
}: Omit<ImageProps, 'src'> & {
  srcDark: string
  srcLight: string
}): ReactElement {
  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  )
}
