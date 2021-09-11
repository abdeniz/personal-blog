import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import React from 'react'

const Link = ({ to, children }) => {
  return <LinkWrapper to={to}>{children}</LinkWrapper>
}

export default Link

const LinkWrapper = styled(GatsbyLink)`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s color;
  text-decoration: none;

  &:hover {
    color: var(--color-secondary);
  }
`
