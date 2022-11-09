import React, { FC, useState, useEffect, useCallback } from 'react'

import { createEditor, Descendant, Element, Editor, Transforms } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

import { ElementRenderer, LeafRenderer } from '../../constants/blockRenderers'
import { customEditor } from '../../constants/customEditor'
import { withImages } from '../../constants/withImages'
import EditorTools from './editorTools'
import EditorManaging from './editorManaging'
import EditorFields from './editorFields'
import PhotoPicker from './photoPicker'

const blankValue: Element[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  }
]

const SlateEditor: FC<{ title?: string, isNew?: boolean, content?: string }> = ({ title, isNew, content }) => {
  const itemName = isNew ? 'post:Create' : `post:${title}`

  let cached = false
  let syncedValue: Element[] = blankValue
  if (content) syncedValue = JSON.parse(content)
  
  let initialValue = blankValue
  if (content) initialValue = syncedValue
  if (typeof window !== 'undefined') {
    const cache = localStorage.getItem(itemName)
    if (cache) {
      initialValue = JSON.parse(cache)
      cached = true
    }
    const titleCache = localStorage.getItem('draftedTitle')
    if (titleCache && isNew) cached = true
  }
  
  // We want the editor to be stable across renders
  const [editor] = useState(() => customEditor(withImages(withHistory(withReact(createEditor())))))
  const [value, setValue] = useState<Descendant[]>(initialValue)
  
  const renderElement = useCallback(ElementRenderer, [])
  const renderLeaf = useCallback(LeafRenderer, [])
  
  const [newTitle, setTitle] = useState(title)
  const [changed, setChanged] = useState(cached)
  
  const onSlateChange: (newValue: Descendant[]) => void = (newValue) => {
    setValue(newValue)
    // Anything besides the selection is changed
    const isAstChange = editor.operations.some(
      op => 'set_selection' !== op.type
    )
    const isInserted = editor.operations.some(
      op => 'insert_node' === op.type
    )
    
    if (isInserted) {
      setChanged(false)
    } else if (isAstChange) {
      // Save the value to Local Storage.
      const cache = JSON.stringify(newValue)
      localStorage.setItem(itemName, cache)
      setChanged(true)
    }
  }

  const clearValue = () => {
    Transforms.insertFragment(editor, syncedValue, {
      at: Editor.range(editor, [])
    })
    setTitle(title)
    localStorage.removeItem(itemName)
    if (isNew) {
      setTitle('')
      localStorage.removeItem('draftTitle')
    }
  }
  
  if (typeof window === 'undefined') return null
  return (
    <Slate
      editor={editor}
      value={value}
      onChange={onSlateChange}
    >
      <PhotoPicker
      />
      <EditorFields
        isNew={isNew}
        newTitle={newTitle}
        setTitle={setTitle}
        setChanged={setChanged}
      />
      <EditorTools editor={editor} />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
      <EditorManaging
        title={title}
        itemName={itemName}
        isNew={isNew}
        newTitle={newTitle}
        value={value}
        clearValue={clearValue}
        showClear={changed}
      />
    </Slate>
  )
}

export default SlateEditor