import React from 'react'
import styled from 'styled-components'
import loading from '../img/loading.gif'

const Loading = () => {
  return (
    <LoadingWrapper>
      <img src={loading} alt='Loading...' />
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loading
