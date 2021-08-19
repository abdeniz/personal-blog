import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import CategoryHeader from '../components/CategoryHeader'
import styled from 'styled-components'
import ArticleCard from '../components/ArticleCard'
import Loading from '../components/Loading'

const CATEGORY_ARTICLES = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      name
      id
      articles {
        id
        title
        excerpt
        body
        created_at
      }
    }
  }
`

const Category = () => {
  const { id } = useParams()

  const { data, error, loading } = useQuery(CATEGORY_ARTICLES, {
    variables: { id: id },
  })

  if (loading) return <Loading />

  if (error) return <p>ERROR!</p>

  return (
    <section>
      <CategoryHeader categoryName={data.category.name} />
      <CategoryWrapper>
        {data &&
          data.category.articles.map((article) => {
            return <ArticleCard article={article}></ArticleCard>
          })}
      </CategoryWrapper>
    </section>
  )
}

const CategoryWrapper = styled.div`
  margin: 50px auto;
`

export default Category
