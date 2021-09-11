import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Post = ({ post }) => {
  return (
    <div>
      <PostTitle>{post.title}</PostTitle>
      <PostExcerpt>{post.desc}</PostExcerpt>
      <Link to={'/' + post.slug}>{'> Read more'}</Link>
    </div>
  )
}

const PostTitle = styled.h3`
  margin-bottom: 16px;
`

const PostExcerpt = styled.p`
  margin-bottom: 16px;
`

export default Post
