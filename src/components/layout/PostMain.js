import React from 'react'
import styled from 'styled-components'

const PostMain = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>
}

const MainWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export default PostMain
