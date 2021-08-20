import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import CategoryHeader from '../components/CategoryHeader'
import ArticleCard from '../components/ArticleCard'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Button from '../components/Button'

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
      <section>
        {data &&
          data.category.articles.map((article) => {
            return (
              <ArticleCard key={article.id} article={article}></ArticleCard>
            )
          })}
        <Button uri='/'>Back to homepage</Button>
      </section>
    </Fragment>
  )
}

export default Category
