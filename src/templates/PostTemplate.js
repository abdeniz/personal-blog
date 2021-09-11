import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import PostMain from '../components/layout/PostMain'
import Column from '../components/layout/Column'
import styled from 'styled-components'

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  return (
    <Layout>
      <PostMain>
        <Column>
          <PostTitle>{post.fullTitle}</PostTitle>
          <Markdown
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </Column>
      </PostMain>
    </Layout>
  )
}

export default PostTemplate

const PostTitle = styled.h1`
  margin-bottom: 16px;
`

const Markdown = styled.div`
  & > p {
    padding: 16px 0;
  }

  & > h4 {
    padding: 32px 0 0 0;
  }
`

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
