import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import CategoryHeader from '../components/CategoryHeader'
import styled from 'styled-components'
import ArticleCard from '../components/ArticleCard'
import Loading from '../components/Loading'
import Error from '../components/Error'

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

  if (error) return <Error />

  return (
    <Fragment>
      <CategoryHeader categoryName={data.category.name} />
      <CategoryWrapper>
        {data &&
          data.category.articles.map((article) => {
            return <ArticleCard article={article}></ArticleCard>
          })}
      </CategoryWrapper>
    </Fragment>
  )
}

const CategoryWrapper = styled.section``

export default Category
