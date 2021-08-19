import React from 'react'
import { Link } from 'react-router-dom'
import format from 'date-fns/format'
import { parseISO } from 'date-fns'
import styled from 'styled-components'

const Header = ({ article: { title, created_at } }) => {
  const createdAt = format(parseISO(created_at), 'MMMM do, yyyy')

  return (
    <section>
      <HeaderWrapper>
        <div>
          <h1>{title}</h1>
          <h3>{createdAt}</h3>
        </div>
        <Link to='/'>
          <p>{'< Back to homepage'}</p>
        </Link>
      </HeaderWrapper>
    </section>
  )
}

const HeaderWrapper = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default Header
