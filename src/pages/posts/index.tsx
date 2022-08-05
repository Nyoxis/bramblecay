import { Suspense } from 'react'
import { prepareReactRender } from '../../gqty'

import { GetServerSideProps } from 'next'
import { PropsWithServerCache } from '@gqty/react'

import PostsList from '../../components/postsList'


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