import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
    <ErrorWrapper>
      <h2>Error while loading page :(</h2>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Error
