import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Post, prepareReactRender, useHydrateCache, useQuery } from '../../../gqty'

import { GetServerSideProps } from 'next'
import { PropsWithServerCache } from '@gqty/react'

const SlateEditor = dynamic(
  () => import('../../../components/editor'),
  {
    //currently not supported with noSSR
    //suspense: true,
    ssr: false,
  }
)

const EditPost = ({ cacheSnapshot, title, isNew = false }: PropsWithServerCache<{ title?: string, isNew?: boolean }>) => {
  useHydrateCache({
    cacheSnapshot,
    
    // If it should refetch everything after the component is mounted
    // By default 'shouldRefetch' is `false` (You can change it in the 'defaults' option)
    shouldRefetch: false,
  })
  const query = useQuery()
  let post: Post | undefined
  if (!isNew) post = query.post({where: { title } })
  return (
    <>
      <Suspense fallback={'Loading'}>
        <SlateEditor title={title} isNew={isNew} content={post ? JSON.stringify(post.content) : undefined}/>
      </Suspense>
      { !isNew &&
        <div>
          {post && JSON.stringify(post.content)}
        </div>
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
  const title = Array.isArray(_ctx.query.title) ? _ctx.query.title[0] : _ctx.query.title
  if (title === "Create") return {
    props: {
      isNew: true
    }
  }
  const { cacheSnapshot } = await prepareReactRender(
    <EditPost title={title} />
  )
  
  return {
    props: {
      cacheSnapshot,
      title
    }
  }
}

export default EditPost