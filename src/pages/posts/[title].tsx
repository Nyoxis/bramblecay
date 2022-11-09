import React, { Suspense } from 'react'
import Error from 'next/error'
import { prepareReactRender, useHydrateCache, useQuery, query, resolved } from '../../gqty'
import Image from 'next/image'
import { Node } from 'slate'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { ImageLoader } from 'next/image'
import type { PropsWithServerCache } from '@gqty/react'

import { ContentRenderer } from '../../constants/blockRenderers'

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
  
  let jsxContent: JSX.Element = <></>
  if (post.content && Node.isNode(post.content[0])) {
    jsxContent = ContentRenderer(post.content)
  }
  
  if (!query.$state.isLoading && !post) return <Error statusCode={404} />
  return (
    <Suspense fallback="Loading...">
      <p>
        Post: {post.title}
      </p>
      <div>
        {jsxContent}
      </div>
    </Suspense>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
    // will wait for the HTML to be generated,identical to SSR (hence why blocking),
    // and then be cached for future requests so it only happens once per path
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const title = Array.isArray(params.title) ? params.title[0] : params.title
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