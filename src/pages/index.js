import React from 'react'
import { graphql } from 'gatsby'
import Post from '../components/Post'
import Project from '../components/Project'
import styled from 'styled-components'
import Main from '../components/layout/Main'
import Column from '../components/layout/Column'
import projects from '../projects'

// CSS
import '../styles/reset.css'
import '../styles/global.css'
import '../styles/deniz-prism-theme.css'
import Layout from '../components/layout/Layout'
import Seo from '../components/Seo'

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo title='Home' />
      <Main>
        <Column>
          <SectionHeader>Recently published</SectionHeader>
          {posts.map(({ frontmatter: post }, index) => {
            return <Post post={post} key={index} />
          })}
        </Column>
        <Column>
          <SectionHeader>Projects</SectionHeader>
          {projects.map((project, index) => {
            return <Project project={project} key={index} />
          })}
        </Column>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
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

const SectionHeader = styled.h2`
  margin-bottom: 32px;
`
