import React, { Fragment } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'
import Loading from '../components/Loading'
import Error from '../components/Error'
import styled from 'styled-components'
import Button from '../components/Button'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneSpace } from 'react-syntax-highlighter/dist/esm/styles/prism'
import clipboard from '../img/clipboard.svg'
import CopyButton from '../components/CopyButton'
import { useState } from 'react'

const ARTICLE = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      title
      body
      created_at
      categories {
        name
        id
      }
    }
  }
`

const Article = () => {
  const { id } = useParams()

  const { data, error, loading } = useQuery(ARTICLE, {
    variables: { id: id },
  })

  if (loading) return <Loading />

  if (error) return <Error />

  return (
    <Fragment>
      <Header key={id} article={data.article} />
      <section>
        <ArticleContent>
          <Body>
            <BodyMarkdown
              children={data.article.body}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <>
                      <CopyButton
                        img={clipboard}
                        alt='clipboard'
                        text={children}
                      />

                      <CustomSyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={duotoneSpace}
                        language={match[1]}
                        PreTag='pre'
                        customStyle={{ background: '#111318' }}
                        wrapLines
                        {...props}
                      />
                    </>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            />
          </Body>
          <Button uri='/'>Back to homepage</Button>
        </ArticleContent>
      </section>
    </Fragment>
  )
}

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
  background: none;

  & * {
    background: #111318;
    font-family: 'JetBrains Mono', monospace;
  }
`

const ArticleContent = styled.div`
  margin: 50px auto;
`

const Body = styled.div`
  margin: 50px 0;
`

const BodyMarkdown = styled(ReactMarkdown)`
  & p {
    margin: 24px 0;
  }
`

export default Article
