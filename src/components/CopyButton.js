import React from 'react'
import styled from 'styled-components'

const CopyButton = (props) => {
  return (
    <CopyButtonWrapper
      onClick={() => {
        navigator.clipboard.writeText(props.text)
      }}
    >
      <IconButtonImg src={props.img} alt={props.alt} />
    </CopyButtonWrapper>
  )
}

const CopyButtonWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 4px;
  width: 35px;
  height: 35px;
  z-index: 1000;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: #e8e8e8;
  }
`

const IconButtonImg = styled.img`
  transition: transform 0.2s;
  width: 20px;
`

export default CopyButton
