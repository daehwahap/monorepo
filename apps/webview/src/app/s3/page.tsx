'use client'

import React from 'react'
import { trpc } from '@/shared/trpc'

const S3Page = () => {
  const handleClick = async () => {
    const data = await trpc.aws.getPresignedUrl.query({ fileExtension: 'image/png' })
    console.log('response', data)
  }

  return (
    <button type="button" onClick={handleClick}>
      presign url 불러오기
    </button>
  )
}

export default S3Page
