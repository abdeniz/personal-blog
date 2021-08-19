import React from 'react'
import HomeHeader from '../components/HomeHeader'
import styled from 'styled-components'
import ArticleCard from '../components/ArticleCard'
import { useQuery, gql } from '@apollo/client'
import Loading from '../components/Loading'
import Error from '../components/Error'

const ARTICLES = gql`
  query GetArticles {
    articles {
      id
      title
      excerpt
      body
      created_at
      categories {
        name
        id
      }
    }
  }
`

const Homepage = () => {
  const { loading, error, data } = useQuery(ARTICLES)

  if (loading) return <Loading />

  if (error) return <Error />

  return (
    <>
      <HomeHeader />
      <ArticlesSection>
        {data.articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ArticlesSection>
    </>
  )
}

const ArticlesSection = styled.section``

export default Homepage
