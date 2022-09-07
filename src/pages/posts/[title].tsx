import { Suspense } from 'react'
import Error from 'next/error'
import { prepareReactRender, useHydrateCache, useQuery } from '../../gqty'
import Image from 'next/image'

import type { GetStaticProps } from 'next'
import type { ImageLoader } from 'next/image'
import type { PropsWithServerCache } from '@gqty/react'
const myLoader: ImageLoader = ({ src, width, quality }) => {
  return `/public/${src}?w=${width}&q=${quality || 75}`
}
const Post = ({ cacheSnapshot, title }: PropsWithServerCache<{title: string}>) => {
  useHydrateCache({
    cacheSnapshot,
    shouldRefetch: false,
  })
  const query = useQuery()
  const post = query.post({ where: { title } })
  
  if (!query.$state.isLoading && !post) return <Error statusCode={404} />
  return (
    <Suspense fallback="Loading...">
      <p>
        Post: {post.title}
      </p>
      <p>
        {JSON.stringify(post.content)}
      </p>
      <p>
        {JSON.stringify(post.images)}
      </p>
      <Image
        loader={myLoader}
        src={post.images[0]}
        alt="me"
        width="64"
        height="64"
      />
    </Suspense>
  )
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  const title = Array.isArray(_ctx.query.title) ? _ctx.query.title[0] : _ctx.query.title
  const { cacheSnapshot } = await prepareReactRender(
    <Post title={title} />
  )
  
  return {
    props: {
      cacheSnapshot,
      title,
    }
  }
}

export default Post