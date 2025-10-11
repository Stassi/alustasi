import { type ReactElement } from 'react'

type Params = {
  params: {
    slug: string
  }
}

export function generateMetadata({
  params: { slug },
}: Params): Record<'title', `Post: ${Params['params']['slug']}`> {
  return { title: `Post: ${slug}` }
}

export default function Page({ params: { slug } }: Params): ReactElement {
  return <h1>Slug: {slug}</h1>
}
