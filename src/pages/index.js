import React from 'react'
import { graphql } from 'gatsby'
import Post from '../components/Post'

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return posts.map(({ frontmatter: post }, index) => {
    return <Post post={post} key={index} />
  })
}

export default Home

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          desc
          fullTitle
          slug
          title
          img {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        html
      }
    }
  }
`
