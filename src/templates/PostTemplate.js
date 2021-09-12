import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import PostMain from '../components/layout/PostMain'
import Column from '../components/layout/Column'
import Row from '../components/layout/Row'
import Tag from '../components/Tag'
import Seo from '../components/Seo'
import { format } from 'date-fns'

import styled from 'styled-components'

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const date = format(new Date(post.date * 1000), 'MMM d, y')

  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.description || post.excerpt || 'nothin’'}
        slug={post.slug}
      />
      <PostMain>
        <Column>
          <PostTitle>{post.fullTitle}</PostTitle>
          <RowWrapper>
            <TagWrapper>
              {post.tags.map((tag, index) => {
                return <Tag key={index}>{tag}</Tag>
              })}
            </TagWrapper>
            <DateWrapper>{date}</DateWrapper>
          </RowWrapper>
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
  margin-bottom: 8px;
`

const Markdown = styled.div`
  & > p {
    padding: 16px 0;
  }

  & > h4 {
    padding: 32px 0 0 0;
  }
`

const RowWrapper = styled(Row)`
  margin-bottom: 16px;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;

    & > div {
      margin-bottom: 8px;
    }
  }
`

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 8px;
`

const DateWrapper = styled.h2`
  color: var(--color-text);
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
        tags
      }
    }
  }
`
