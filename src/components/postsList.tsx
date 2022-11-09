import { FC } from 'react'
import { useQuery, useHydrateCache, useMutation } from '../gqty'
import { PropsWithServerCache } from '@gqty/react'
import Link from 'next/link'
import React from 'react'

const PostsList: FC<PropsWithServerCache<{ editable?: boolean }>> = ({ cacheSnapshot, editable = false }) => {
  useHydrateCache({
    cacheSnapshot,
    shouldRefetch: false,
  })
  const query = useQuery()
  
  const [deletePost] = useMutation(
    (mutation, title: string) => {
      const post = mutation.deletePost({ where: { title } })
      return post.title
    }, {
      refetchQueries: [query.posts()],
      awaitRefetchQueries: true,
    }
  )
  
  return (
    <div>
      {query.posts().map((post) => {
        return (
          <div key={post.title}>
            <Link href={`posts/${encodeURIComponent(post.title)}`}>
              {post.title}
            </Link>
            {editable &&
              <button
                onMouseDown={e => {e.preventDefault(); deletePost({ args: post.title })}}
              >
                delete
              </button>
            }
          </div>
        )
      })}
    </div>
  )
}

export default PostsList