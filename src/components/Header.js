import React from 'react'
import { Link } from 'react-router-dom'
import format from 'date-fns/format'
import { parseISO } from 'date-fns'
import styled from 'styled-components'

const Header = ({ article: { title, created_at, categories } }) => {
  const createdAt = format(parseISO(created_at), 'MMMM do, yyyy')

  return (
    <section>
      <HeaderWrapper>
        <h1>{title}</h1>
        <h3>
          {createdAt}
          {categories &&
            categories.map((category) => {
              return (
                <Link to={'/categories/' + category.id}>
                  {' '}
                  ｜ {category.name}
                </Link>
              )
            })}
        </h3>
      </HeaderWrapper>
    </section>
  )
}

const HeaderWrapper = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export default Header
