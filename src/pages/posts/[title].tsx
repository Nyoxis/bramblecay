import { Suspense } from 'react'
import { prepareReactRender, useHydrateCache, useQuery } from '../../gqless'

import { GetServerSideProps } from 'next'
import { PropsWithServerCache } from '@gqless/react'

const Post = ({ cacheSnapshot, title }: PropsWithServerCache<{title: string}>) => {
  useHydrateCache({
    cacheSnapshot,
    shouldRefetch: false,
  })
  const query = useQuery()
  const post = query.post({ where: { title } })
  
  if (!query.$state.isLoading && !post) return <>404</>
  return (
    <Suspense fallback="Loading...">
      <p>
        Post: {post.title}
      </p>
      <p>
        {JSON.stringify(post.content)}
      </p>
    </Suspense>
  )
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
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