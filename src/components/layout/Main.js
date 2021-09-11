import React from 'react'
import styled from 'styled-components'

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>
}

const MainWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 65fr 35fr;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`

export default Main
