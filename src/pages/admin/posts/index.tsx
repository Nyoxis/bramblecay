import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { prepareReactRender } from '../../../gqless'
import { PropsWithServerCache } from '@gqless/react'

import PostsList from '../../../components/postsList'
import { Suspense } from 'react'

const AdminPosts = ({ cacheSnapshot }: PropsWithServerCache) => {
  return (
    <>
      <Suspense fallback="Loading...">
        <PostsList cacheSnapshot={cacheSnapshot} editable={true} />
      </Suspense>
      <Link href="posts/Create">
        <a>
          Create Post
        </a>
      </Link>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { cacheSnapshot } = await prepareReactRender(
    <AdminPosts />
  )
  
  return {
    props: {
      cacheSnapshot
    }
  }
}
export default AdminPosts