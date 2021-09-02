import React from 'react'
import styled from 'styled-components'
import Column from './Column'
import PostListItem, { IPostListItem } from './PostListItem'

const tempPosts: IPostListItem[] = [
  {
    title: 'Mauris quis auctor augue',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor dui. Fusce gravida, nisl non lacinia sodales, quam orci maximus sapien, id gravida diam turpis sit amet tellus. Curabitur sit amet egestas risus. ',
  },
  {
    title: 'Aliquam vehicula',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempor dui. Fusce gravida, nisl non lacinia sodales, quam orci maximus sapien, id gravida diam turpis sit amet tellus. Curabitur sit amet egestas risus. Aenean blandit, justo ut vulputate egestas, odio erat egestas tellus.',
  },
  {
    title: 'Phasellus vehicula neque orci',
    excerpt:
      'Donec vitae nulla condimentum felis accumsan tempor ac vel magna. Praesent volutpat lectus ex, et posuere sapien venenatis non. Nam fringilla est sed tempor mollis. Nulla diam quam, ullamcorper ac enim mollis, mattis molestie massa.',
  },
]

const PostList = () => {
  return (
    <Column>
      <h2>Recently published</h2>
      <div>
        {tempPosts.map(({ title, excerpt }, index) => (
          <PostListItemStyled key={index} title={title} excerpt={excerpt} />
        ))}
      </div>
    </Column>
  )
}

const PostListItemStyled = styled(PostListItem)`
  margin: 32px 0;
`

export default PostList
