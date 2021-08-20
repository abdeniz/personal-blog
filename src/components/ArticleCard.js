import React from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import { parseISO } from 'date-fns'
import { Link } from 'react-router-dom'

const ArticleCard = ({
  article: { id, title, created_at, excerpt, categories },
}) => {
  const createdAt = format(parseISO(created_at), 'MMMM do, yyyy')

  return (
    <ArticleCardWrapper>
      <Link to={`/articles/${id}`}>
        <h1 style={{ marginBottom: '8px' }}>{title}</h1>
      </Link>

      <p>{excerpt}</p>
      <h3>
        {createdAt}
        {categories &&
          categories.map((category) => {
            return (
              <Link to={'/categories/' + category.id}> ｜ {category.name}</Link>
            )
          })}
      </h3>
    </ArticleCardWrapper>
  )
}

const ArticleCardWrapper = styled.div`
  margin: 50px 0;
`

export default ArticleCard
