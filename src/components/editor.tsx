import React, { FC, useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useMutation, PostUpdateInput, PostWhereUniqueInput, PostCreateInput, query } from '../gqless'
import { createEditor, Descendant, Element } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

import { CodeElement, DefaultElement, Leaf } from './blockRenderers'
import { customEditor } from '../constants/customEditor'

let initialValue: Element[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]
if (typeof window !== 'undefined') {
  const content = localStorage.getItem('content')
  if (content) initialValue = JSON.parse(content)
}

const Editor: FC<{ title?: string, isNew?: boolean }> = ({ title, isNew }) => {
  const router = useRouter()
  const [updatePost] = useMutation(
    (mutation, args: { data: PostUpdateInput, where: PostWhereUniqueInput }) => {
      const post = mutation.updatePost(args)
      return post.title
    },
    {
      onCompleted(title) {
        router.replace(title)
      },
      refetchQueries: [query.post({ where: { title } })],
    }
  )
  const [createPost] = useMutation(
    (mutation, args: { data: PostCreateInput }) => {
      const post = mutation.createPost(args)
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
  // We want the editor to be stable across renders
  const [editor] = useState(() => customEditor(withReact(createEditor())))
  
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])
  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  const [value, setValue] = useState<Descendant[]>(initialValue)
  const [newTitle, setTitle] = useState(title)
  
  if (typeof window === 'undefined') return null
  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => {
        setValue(newValue)
        // Anything besides the selection is changed
        const isAstChange = editor.operations.some(
          op => 'set_selection' !== op.type
        )
        if (isAstChange) {
          // Save the value to Local Storage.
          const content = JSON.stringify(newValue)
          localStorage.setItem('content', content)
        }
      }}
    >
      <input
        type="text"
        id="title"
        name="title"
        value={newTitle}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <div>
        <button
          onMouseDown={event => {
            event.preventDefault()
            editor.toggleBoldMark()
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault()
            editor.toggleCodeBlock()
          }}
        >
          Code Block
        </button>
      </div>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
      <button
        onMouseDown={event => {
          event.preventDefault()
          isNew
          ?createPost({
            args: {
              data: { title: newTitle, content: JSON.parse(localStorage.getItem('content')) }
            }
          })
          :updatePost({
            args: {
              data: { title: { set: newTitle }, content: JSON.parse(localStorage.getItem('content')) },
              where: { title }
            }
          })
        }}
      >
        Save
      </button>
      {!isNew &&
        <button
          onMouseDown={event => {
            event.preventDefault()
            deletePost()
          }}
        >
          Delete
        </button>
      }
    </Slate>
  )
}

export default Editor