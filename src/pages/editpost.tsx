import { useQuery } from '../gqless'
import { Suspense } from 'react'
import Editor from '../components/editor'

const QueryPost = () => {
  const query = useQuery()
  
  const post = query.post({where: {title: 'test'}})
  if (!post.title && !post.content) return <p>null</p>
  return (
    <div>
      {
        JSON.stringify(post.content)
      }
    </div>
  )
}

const EditPost = () => {
  return (
    <>
      <Editor/>
      <Suspense fallback="Loading...">
        <QueryPost/>
      </Suspense>
    </>
  )
}

export default EditPost