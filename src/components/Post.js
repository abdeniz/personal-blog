import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Post = ({ post }) => {
  return (
    <PostWrapper>
      <PostTitle>{post.title}</PostTitle>
      <PostExcerpt>{post.desc}</PostExcerpt>
      <Link to={'/' + post.slug}>{'> Read more'}</Link>
    </PostWrapper>
  )
}

const PostWrapper = styled.div`
  margin-bottom: 32px;
`

const PostTitle = styled.h3`
  margin-bottom: 16px;
`

const PostExcerpt = styled.p`
  margin-bottom: 16px;
`

export default Post
