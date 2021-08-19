import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

const ARTICLE = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      title
      body
      created_at
    }
  }
`

const Article = () => {
  const { id } = useParams()

  const { data, error, loading } = useQuery(ARTICLE, {
    variables: { id: id },
  })

  if (loading) return <p>Loading...</p>

  if (error) return <p>ERROR!</p>

  return (
    <>
      <Header article={data.article} />
      <section>
        <ReactMarkdown>{data.article.body}</ReactMarkdown>
      </section>
    </>
  )
}

export default Article
