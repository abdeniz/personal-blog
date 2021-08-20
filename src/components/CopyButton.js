import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ClipboardIcon } from '../img/clipboard.svg'

const CopyButton = (props) => {
  return (
    <CopyButtonWrapper
      onClick={() => {
        navigator.clipboard.writeText(props.text)
      }}
    >
      <StyledClipboardIcon />
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
  border-radius: 4px;
  width: 35px;
  height: 35px;
  z-index: 1000;
  cursor: pointer;

  transition: background-color 0.2s;

  & svg > path {
    fill: #fe8c52;
    transition: fill 0.2s;
  }

  &:hover > svg > path {
    fill: #fafafa;
  }
`

const StyledClipboardIcon = styled(ClipboardIcon)``

export default CopyButton
