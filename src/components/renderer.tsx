import { FC, useState, useEffect, useCallback } from 'react'
/*
const Renderer: FC = () => {
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
  return (
    <></>
  )
}

export default Renderer*/