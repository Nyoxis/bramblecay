/* eslint react/prop-types: 0 */
import React from 'react'
import {
  RenderElementProps,
  RenderLeafProps,
  useSlateStatic,
  useSelected,
  useFocused,
  ReactEditor
} from 'slate-react'
import { Node, Text, Element, Transforms, Editor, Path } from 'slate'
import Image, {ImageLoader} from 'next/image'

interface CustomRenderElementProps extends Omit<RenderElementProps, 'attributes'> {
  attributes?: RenderElementProps['attributes']
}

interface CustomRenderLeafProps extends Omit<RenderLeafProps, 'attributes'> {
  attributes?: RenderLeafProps['attributes']
}

const myLoader: ImageLoader = ({ src, width, quality }) => {
  return `/public/${src}.jpg?w=${width}&q=${quality || 75}`
}

const ImageElement: (props: CustomRenderElementProps) => JSX.Element = props => {
  let editor: Editor
  let path: Path
  if (props.attributes) {
    editor = useSlateStatic()
    path = ReactEditor.findPath(editor, props.element)
  }
  
  const selected = useSelected()
  const focused = useFocused()
  
  return (
    <div {...props.attributes}>
      {props.children}
      <div
        contentEditable={false}
        className={'position: relative'}
      >
        <Image
          loader={myLoader}
          src={'url' in props.element ? props.element.url : ''}
          alt='me'
          width='80'
          height='45'
          //box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
        />
        {
          editor &&
          <button
            onClick={() => Transforms.removeNodes(editor, { at: path })}
          />
        }
      </div>
    </div>
  )
}

const CodeElement: (props: CustomRenderElementProps) => JSX.Element = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

const DefaultElement: (props: CustomRenderElementProps) => JSX.Element = props => {
  return (
    <p {...props.attributes}>
      {props.children}
    </p>
  )
}

const Leaf: (props: CustomRenderLeafProps) => JSX.Element = props => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: ('bold' in props.leaf && props.leaf.bold) ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}

const ElementRenderer: (props: CustomRenderElementProps) => JSX.Element = props => {
  switch (props.element.type) {
    case 'code':
      return <CodeElement {...props} />
    case 'image':
      return <ImageElement {...props} />
    default:
      return <DefaultElement {...props} />
  }
}

const LeafRenderer: (props: CustomRenderLeafProps) => JSX.Element = props => {
  return <Leaf {...props} />
}

const ContentRenderer: (node: Node) => JSX.Element = node => {
  if (Text.isText(node)) {
    return <LeafRenderer leaf={node} text={node}>{node.text}</LeafRenderer>
  }
  if (Element.isElement(node)) {
    const children = <>{node.children.map(n => ContentRenderer(n))}</>
    return <ElementRenderer element={node}>{children}</ElementRenderer>
  }
  if (Array.isArray(node)) {
    return (
      <>{node.map(n => ContentRenderer(n))}</>
    )
  }
}

export { LeafRenderer, ElementRenderer, ContentRenderer }