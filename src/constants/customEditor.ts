import { Editor, Element, Text, Transforms } from 'slate'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

import type { ImageElement } from './withImages'

type CustomElement = { type: 'paragraph' | 'code'; children: CustomText[] } | ImageElement
type CustomText = { text: string, bold?: boolean }

export type EmptyText = {
  text: string
}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText | EmptyText
  }
}

interface CustomEditor extends Editor {
  isBoldMarkActive(): boolean
  isCodeBlockActive(): boolean
  toggleBoldMark(): void
  toggleCodeBlock(): void
}

const customEditor: (editor: Editor) => CustomEditor & Editor = (editor: CustomEditor) => {
  editor.isBoldMarkActive = () => {
    const [match] = Editor.nodes(editor, {
      match: (n: Text) => {
        if ('bold' in n) return n.bold === true
      },
      universal: true,
    })
    
    return !!match
  }
  
  editor.isCodeBlockActive = () => {
    const [match] = Editor.nodes(editor, {
      match: (n: Element) => n.type === 'code',
    })

    return !!match
  }
  
  editor.toggleBoldMark = () => {
    Transforms.setNodes(
      editor,
      { bold: editor.isBoldMarkActive() ? null : true },
      { match: (n: Text) => Text.isText(n), split: true }
    )
  }
  
  editor.toggleCodeBlock = () => {
    Transforms.setNodes(
      editor,
      { type: editor.isCodeBlockActive() ? null : 'code' },
      { match: (n: Element) => Editor.isBlock(editor, n) }
    )
  }
  
  return editor
}

export { customEditor }
export type { CustomEditor }