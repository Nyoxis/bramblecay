import React, { useState, useEffect, useCallback } from 'react'
import { useQuery, useMutation } from '../gqless'
import { createEditor, Descendant, Element } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

import { CodeElement, DefaultElement, Leaf } from '../components/blockRenderers'
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

const Query = () => {
  const query = useQuery()
  
  const post = query.post({where: {title: 'test'}})
  console.log(`there post ${JSON.stringify(post)}`)
  
  if (query.$state.isLoading) return <p>Loading...</p>
  if (!post) return <p>null</p>
  return (
    <div>
      {
        post.content.map((section, key) => { return (
          <pre key={key}>
            {JSON.stringify(section)}
          </pre>
        )})
      }
    </div>
  )
}

const Editor = () => {
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
            //savePost({title: 'test', content: JSON.stringify(value)})
          }}
        >
          Save
        </button>
      </Slate>
      <Query/>
    </div>
  )
}

export default Editor