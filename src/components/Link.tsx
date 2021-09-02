import styled from 'styled-components'

const Link = styled.a`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 14px;
  cursor: pointer;

  transition: 0.2s color;

  &:hover {
    color: var(--color-secondary);
  }
`

export default Link
