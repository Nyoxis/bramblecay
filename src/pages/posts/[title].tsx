import { useRouter } from 'next/router'
import { Suspense } from 'react'
import { useQuery } from '../../gqless'

const Post = () => {
  const router = useRouter()
  const title = Array.isArray(router.query.title) ? router.query.title[0] : router.query.title 

  const query = useQuery({
    prepare({ prepass, query }) {
      prepass(query.post, 'title', 'content')
    }
  })
  const post = query.post({ where: { title: title } })
  console.log(`not loading ${!query.$state.isLoading} && post undefined ${!post.title} post ${post.title}`)
  if (!query.$state.isLoading && !post.title) return <>404</>
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

export default Post