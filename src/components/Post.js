import React from 'react'

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.desc}</p>
    </div>
  )
}

export default Post
