import React from 'react'
import styled from 'styled-components'

interface IMain {
  children: JSX.Element
}

const Main = ({ children }: IMain) => {
  return <MainWrapper>{children}</MainWrapper>
}

const MainWrapper = styled.div`
  width: 1000px;
  margin: 32px auto;
`

export default Main
