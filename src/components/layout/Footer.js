import React, { useContext } from 'react'
import styled from 'styled-components'
import Column from './Column'
import Main from './Main'
import logoWhite from '../../images/logoWhite.svg'
import logoDark from '../../images/logoDark.svg'
import { Link } from 'gatsby'
import { ThemeContext } from '../../utils'
import Linkedin from '../icons/Linkedin'

const Footer = () => {
  const { darkTheme } = useContext(ThemeContext)

  return (
    <FooterWrapper>
      <Main>
        <Column>
          <FooterList>
            <Link to='/latest'>
              <li>Latest</li>
            </Link>
            <Link to='/categories'>
              <li>Categories</li>
            </Link>
            <Link to='/categories/react'>
              <li>React</li>
            </Link>
            <Link to='/categories/javascript'>
              <li>Javascript</li>
            </Link>
            <Link to='/categories/css'>
              <li>CSS</li>
            </Link>
          </FooterList>
        </Column>
        <LogoColumn>
          <Link to={'/'}>
            <Logo src={darkTheme ? logoWhite : logoDark} alt='logo' />
          </Link>
          <a href='https://www.linkedin.com/in/denizabdurrahmani/'>
            <Linkedin fill='var(--color-paragraph)' />
          </a>
        </LogoColumn>
      </Main>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  margin-top: 64px;
  width: 100%;
  padding: 32px 0;
  background-color: var(--color-code-background);
`

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;

  & > a > li {
    padding: 4px 0;
    font-size: 20px;
    transition: color 0.2s;

    &:hover {
      color: var(--color-tag-background);
    }
  }
`

const LogoColumn = styled(Column)`
  display: flex;
  flex-direction: column;
`

const Logo = styled.img``

export default Footer
