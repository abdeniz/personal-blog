import React from 'react'
import styled from 'styled-components'
import loading from '../img/loading.gif'

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingImg src={loading} alt='Loading...' />
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingImg = styled.img`
  width: 75px;
`

export default Loading
