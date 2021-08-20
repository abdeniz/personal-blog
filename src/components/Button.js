import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <Link to={props.uri}>
      <ButtonWrapper>
        <h3>{props.children}</h3>
      </ButtonWrapper>
    </Link>
  )
}

const ButtonWrapper = styled.div`
  background-color: #111318;
  padding: 16px 24px;
  display: inline-block;
  border-radius: 4px;
  text-align: center;

  & h3 {
    transition: color 0.2s;
  }

  &:hover h3 {
    color: #fafafa;
  }

  @media only screen and (max-width: 750px) {
    display: block;
  }
`

export default Button
