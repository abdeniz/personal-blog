import React from 'react'
import { graphql } from 'gatsby'
import Post from '../components/Post'
import Main from '../components/layout/Main'
import Column from '../components/layout/Column'
import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'

const Categories = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo title='Categories' />
      <Main>
        <Column>
          {posts.map(({ frontmatter: post }, index) => {
            return <Post post={post} key={index} />
          })}
        </Column>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          desc
          slug
          title
        }
      }
    }
  }
`

export default Categories
