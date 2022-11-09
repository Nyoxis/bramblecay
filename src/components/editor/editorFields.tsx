import React, { FC, ReactNode, useState, Dispatch, SetStateAction } from 'react'

type ContainerProps = {
  isNew: boolean,
  newTitle: string,
  setTitle: Dispatch<SetStateAction<string>>
  setChanged: Dispatch<SetStateAction<boolean>>
}

const EditorFields: FC<ContainerProps> = (props) => {
  const { isNew, newTitle, setTitle, setChanged } = props
  if (typeof window !== 'undefined' && isNew) {
    setTitle(localStorage.getItem('draftTitle'))
  }
  return (
    <div>
      <input
        type="text"
        id="title"
        name="title"
        value={newTitle}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value)
          setChanged(true)
          if (isNew) localStorage.setItem('draftTitle', e.target.value)
        }}
      />
    </div>
  )
}

export default EditorFields