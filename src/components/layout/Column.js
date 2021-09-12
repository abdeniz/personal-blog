import styled from 'styled-components'

const Column = styled.div`
  width: 95%;

  @media only screen and (max-width: 1100px) {
    padding: 32px 64px;
    width: 100%;
  }
  @media only screen and (max-width: 720px) {
    padding: 24px;
    width: 100%;
  }
`

export default Column
