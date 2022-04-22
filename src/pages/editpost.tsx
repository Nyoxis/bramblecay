import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { prepareReactRender, useHydrateCache, useQuery } from '../gqless'

import { GetServerSideProps } from 'next'
import { PropsWithServerCache } from '@gqless/react'

const Editor = dynamic(
  () => import('../components/editor'),
  {
    //currently not supported with noSSR
    //suspense: true,
    ssr: false,
  }
)

const EditPost = ({ cacheSnapshot, title }: PropsWithServerCache<{ title: string }>) => {
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
        <Editor title={title}/>
      </Suspense>
      <div>
        {query.post({where: { title } }) && JSON.stringify(query.post({where: { title } }).content)}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const title = 'test'
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