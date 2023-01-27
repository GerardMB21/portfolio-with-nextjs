import { imageContainerProps } from '@/interfaces/propsTypes'
import Image from 'next/image'
import React from 'react'

export default function ImageContainer({ clase, src, alt }: imageContainerProps) {
  return (
    <div className={ `${clase}` }>
      <Image
        src={src}
        alt={alt}
      />
    </div>
  )
}
