import React, { FC, useState, Dispatch, SetStateAction } from 'react'
import {
  useMutation,
  PostUpdateInput,
  PostWhereUniqueInput,
  PostCreateInput,
  useQuery,
  ImageCreateInput,
  SortOrder
} from 'src/gqty'
import Image, { ImageLoader } from 'next/image'

import { uploadImages } from '../../constants/withImages'

const myLoader: ImageLoader = ({ src, width, quality }) => {
  return `/public/${src}_thumbnail.jpg?w=${width}&q=${quality || 75}`
}

const PhotoPicker: FC = (props) => {
  
  const query = useQuery()
  
  const images = query.images({
    orderBy: [{ uploadTime: SortOrder.desc }],
    take: 10,
  })
  
  return (
    <div>
      <input
        type='file'
        onChange={event => {
          event.preventDefault()
          uploadImages(event.target.files)
        }}
      />
      {images.map((image) => {
        if (!image.thumbnail) return
        return (
          <Image
            key={image.id}
            loader={myLoader}
            //adding fullsize image link instead Mime type. Don't know if it can cause any problems
            src={image.thumbnail.replace('image/jpeg', image.id)}
            alt="me"
            width="64"
            height="64"
          />
        )
      })}
    </div>
  )
}

export default PhotoPicker