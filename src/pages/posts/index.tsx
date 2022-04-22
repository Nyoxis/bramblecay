import Link from 'next/link'
import { Suspense } from 'react'
import { useQuery, prepareReactRender, useHydrateCache } from '../../gqless'

import { GetServerSideProps } from 'next'
import { PropsWithServerCache } from '@gqless/react'

const PostsList = ({ cacheSnapshot }: PropsWithServerCache) => {
  useHydrateCache({
    cacheSnapshot,
    shouldRefetch: false,
  })
  const query = useQuery()

  return (
    <>
      {query.posts().map((post) => {
        return (
          <div key={post.title}>
            <Link href={`/posts/${post.title}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        )
      })}
    </>
  )
}

const Posts = ({ cacheSnapshot }: PropsWithServerCache) => {
  
  return (
    <Suspense fallback={'Loading'}>
      <PostsList cacheSnapshot={cacheSnapshot} />
    </Suspense>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { cacheSnapshot } = await prepareReactRender(
    <Posts />
  )
  
  return {
    props: {
      cacheSnapshot
    }
  }
}

export default Posts