import React, { useState, useEffect, useCallback } from 'react'
import { createEditor, Descendant, Element } from 'slate'
import { Slate, Editable, withReact} from 'slate-react'

import {useQuery, useMutation} from 'urql'
import { withUrqlClient } from 'next-urql'

import { CodeElement, DefaultElement, Leaf } from '../components/blockRenderers'
import { customEditor } from '../constants/customEditor'

const Editor = () => {
  const [result, refetch] = useQuery({
    query: `#graphql
      query {
        post (where: {title: "test"}) {
          content
        }
      }
    `
  })
  
  const [savePostResult, savePost] = useMutation(
    `#graphql
      mutation ($title: String!, $content: JSON!) {
        createPost (data: {title: $title, content: $content}) {
          title
        }
      }
    `
  )
  // We want the editor to be stable across renders
  const [editor] = useState(() => customEditor(withReact(createEditor())))

  const renderElement = useCallback((props) => {
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
  
  let initialValue: Element[] = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]
  const [value, setValue] = useState<Descendant[]>(initialValue)
  
  useEffect(() => {
    const content = localStorage.getItem('content')
    if (content) {
      setValue(JSON.parse(content))
      // "value" is not reactive
      editor.children = JSON.parse(content)
    }
  }, [])
  
  return (
    <div>
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
            savePost({title: 'test', content: JSON.stringify(value)})
          }}
        >
          Save
        </button>
      </Slate>
      {result.data && (
        <div>
          {JSON.parse(result.data?.post.content).map((section, key) => { return (
            <pre key={key}>
              {JSON.stringify(section)}
            </pre>
          )})}
          {result.error?.message}
          {savePostResult.error?.message}
        </div>
      )}
    </div>
  )
}

export default withUrqlClient((_ssrExchange, ctx) => ({
  // ...add your Client options here
  url: 'http://localhost:5000/graphql',
}))(Editor)