import React from 'react'
import styled from 'styled-components'
import Link from './Link'

export interface IPostListItem {
  title: string
  excerpt: string
  className?: string
}

const PostListItem = ({ title, excerpt, className }: IPostListItem) => {
  return (
    <div className={className}>
      <PostTitle>{title}</PostTitle>
      <PostExcerpt>{excerpt}</PostExcerpt>
      <Link>{'> Read more'}</Link>
    </div>
  )
}

const PostTitle = styled.h3`
  margin-bottom: 16px;
`

const PostExcerpt = styled.p`
  margin-bottom: 16px;
`

export default PostListItem
