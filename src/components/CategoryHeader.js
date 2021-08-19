import React from 'react'
import styled from 'styled-components'

const CategoryHeader = ({ categoryName }) => {
  return (
    <CategoryHeaderWrapper>
      <CategoryHeaderContent>
        <h1>{categoryName}</h1>
      </CategoryHeaderContent>
    </CategoryHeaderWrapper>
  )
}

const CategoryHeaderContent = styled.div`
  margin: 50px auto;
`

const CategoryHeaderWrapper = styled.section`
  border-bottom: solid 1px #e8e8e8;
`

export default CategoryHeader
