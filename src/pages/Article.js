import React, { Fragment } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'
import Loading from '../components/Loading'
import Error from '../components/Error'
import styled from 'styled-components'
import Button from '../components/Button'

const ARTICLE = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      title
      body
      created_at
      categories {
        name
        id
      }
    }
  }
`

const Article = () => {
  const { id } = useParams()

  const { data, error, loading } = useQuery(ARTICLE, {
    variables: { id: id },
  })

  if (loading) return <Loading />

  if (error) return <Error />

  return (
    <Fragment>
      <Header article={data.article} />
      <section>
        <ArticleContent>
          <Body>
            <BodyMarkdown>{data.article.body}</BodyMarkdown>
          </Body>
          <Button uri='/'>Back to homepage</Button>
        </ArticleContent>
      </section>
    </Fragment>
  )
}

const ArticleContent = styled.div`
  margin: 50px auto;
`

const Body = styled.div`
  margin: 50px 0;
`

const BodyMarkdown = styled(ReactMarkdown)`
  & p {
    margin: 24px 0;
  }
`

export default Article
