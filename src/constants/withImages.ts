
import { Element, Transforms } from 'slate'
import { resolved, mutation, refetch, query, SortOrder } from 'src/gqty'
import Compressor from 'compressorjs'

import type { Editor } from 'slate'
import type { HistoryEditor } from 'slate-history'
import type { CustomEditor, EmptyText } from './customEditor'

export type ImageElement = {
  type: 'image'
  url: string
  children: EmptyText[]
}

const withImages: (editor: Editor & HistoryEditor) => Editor & HistoryEditor = editor => {
  const { insertData, isVoid } = editor

  editor.isVoid = element => {
    return element.type === 'image' ? true : isVoid(element)
  }

  editor.insertData = data => {
    const text = data.getData('text/plain')
    const { files } = data
    console.log(text)
    let dataURLmime: string
    if (text.startsWith('data:')) {
      dataURLmime = text.split(':')[1].split(';')[0]
    }
    if (dataURLmime && !dataURLmime.startsWith('image')) {
      //if dataURL contains id of full image
      console.log(`dataurl ${dataURLmime}`)
      insertImage(editor, dataURLmime)
    } else if (files.length) {
      //if insert is image file
      console.log(`file ${files.length}`)
      uploadImages(files, (url) => {insertImage(editor, url)})
    } else {
      //if not image insert
      insertData(data)
    }
  }
  
  return editor
}

const compress = (blob: File | Blob, options: Omit<Compressor.Options, 'success'>): Promise<File | Blob> => {
  return new Promise((success, error) => {
    new Compressor(blob, {
      // to env
      ...options,
      
      success,
      error,
    })
  })
}

const base64encode = (blob: File | Blob): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onloadend = () => {
      resolve(reader.result.toString())
    }
  })
}

const uploadImages: (files: FileList, thenCb?: (url: string) => void) => void = async (files, thenCb) => {
  if (!files) return
  if (files.length < 1) return
  
  for (let index = 0; index < files.length; index++) {
    const file = files.item(index)
    const [mime] = file.type.split('/')
    
    if (mime === 'image') {
      //to env
      const imagePromise = compress(file, {
        quality: 0.8,
        maxWidth: 800,
        maxHeight: 800,
        convertTypes: ['image/png', 'image/webp', 'image/gif'],
        convertSize: 0,
      })
      const thumbnailPromise = compress(file, {
        quality: 0.9,
        maxWidth: 256,
        maxHeight: 256,
        convertTypes: ['image/png', 'image/webp', 'image/gif'],
        convertSize: 0,
      })
      const [image, thumbnail] = await Promise.all([imagePromise, thumbnailPromise])

      const encodedThumbnail = await base64encode(thumbnail)
      resolved(() => {
        const result = mutation.createImage({
          data: { thumbnail: encodedThumbnail },
          image
        })
        return result.id
      })
        .then((id) => {
          if (thenCb) thenCb(id)
          
          refetch(query.images({
            orderBy: [{ uploadTime: SortOrder.desc}],
            take: 10
          }))
        })
      
    }
  }
}

const insertImage: (editor: Editor, url: string) => void = (editor, url) => {
  const text = { text: '' }
  const image: ImageElement = { type: 'image', url, children: [text] }
  Transforms.insertNodes(editor, image)
}

export { withImages, uploadImages }