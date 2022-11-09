import React, { FC } from "react"
import { useRouter } from 'next/router'
import { Descendant } from "slate"
import {
  useMutation,
  PostUpdateInput,
  PostWhereUniqueInput,
  PostCreateInput,
  query
} from 'src/gqty'

type ManagingProps = {
  title: string,
  itemName: string,
  isNew: boolean,
  newTitle: string,
  value: Descendant[],
  clearValue: () => void,
  showClear: boolean
}

const EditorManaging: FC<ManagingProps> = (props) => {
  const { title, itemName, isNew, newTitle, value, clearValue, showClear } = props
  
  const router = useRouter()
  
  const [updateOrCreatePost] = useMutation(
    (mutation) => {
      const post = isNew
        ? mutation.createPost({
            data: { title: newTitle, content: value }
          })
        : mutation.updatePost({
            data: { title: { set: title }, content: value },
            where: { title }
          })
      return post.title
    },
    {
      onCompleted(title) {
        router.replace(encodeURIComponent(title))
      },
      refetchQueries: [query.post({ where: { title } })],
    }
  )
  const [deletePost] = useMutation(
    (mutation) => {
      const post = mutation.deletePost({ where: { title } })
      return post.title
    },
    {
      onCompleted() {
        router.push('./')
      },
    }
  )
  
  return (
    <div>
      <button
        onMouseDown={event => {
          event.preventDefault()
          updateOrCreatePost()
        }}
      >
        Save
      </button>
      {!isNew &&
        <button
          onMouseDown={event => {
            event.preventDefault()
            deletePost()
            localStorage.removeItem(itemName)
          }}
        >
          Delete
        </button>
      }
      {showClear && <button
        onMouseDown={event => {
          event.preventDefault()
          clearValue()
        }}
      >
        {isNew ? 'Clear' : 'Cancel'}
      </button>}
    </div>
  )
}

export default EditorManaging