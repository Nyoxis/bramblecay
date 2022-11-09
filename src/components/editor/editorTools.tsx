import React, { FC } from 'react'
import type { CustomEditor } from '../../constants/customEditor'

const EditorTools: FC<{ editor: CustomEditor }> = ({ editor }) => {
  return (
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
  )
}

export default EditorTools