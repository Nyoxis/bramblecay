import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { prepareReactRender, useHydrateCache, useQuery } from '../../../gqless'

import { GetServerSideProps } from 'next'
import { PropsWithServerCache } from '@gqless/react'

const Editor = dynamic(
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
  
  return (
    <>
      <Suspense fallback={'Loading'}>
        <Editor title={title} isNew={isNew}/>
      </Suspense>
      { !isNew &&
        <div>
          {query.post({where: { title } }) && JSON.stringify(query.post({where: { title } }).content)}
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