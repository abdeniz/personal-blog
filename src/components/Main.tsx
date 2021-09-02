import React from 'react'
import styled from 'styled-components'

interface IMain {
  children: JSX.Element
}

const Main = ({ children }: IMain) => {
  return <MainWrapper>{children}</MainWrapper>
}

const MainWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export default Main
