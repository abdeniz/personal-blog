import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import Main from '../components/layout/Main'

const PostTemplate = ({ data }) => {
  return (
    <Layout>
      <Main>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Main>
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query getPost($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      htmlAst
      frontmatter {
        desc
        date
        title
        fullTitle
        slug
        img {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: { fit: COVER }
              width: 700
              height: 500
            )
          }
        }
      }
    }
  }
`
