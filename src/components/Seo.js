import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ title, description, slug }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const { defaultTitle, titleTemplate, defaultDescription, siteUrl } =
    site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name='description' content={seo.description} />
      {seo.slug && <meta property='og:url' content={seo.url} />}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      {seo.image && <meta property='og:image' content={seo.image} />}
    </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}

Seo.defaultProps = {
  title: null,
  description: null,
  article: false,
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`
