import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'
import chevron from '../img/chevron.svg'
import moon from '../img/moon.svg'
import sun from '../img/sun.svg'
import Main from './Main'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Header = () => {
  const { setDarkTheme, darkTheme } = useContext(ThemeContext)

  return (
    <Main>
      <HeaderWrapper>
        <LeftWrapper>
          <Logo src={logo} alt='logo' />
          <Slogan>{'|  dev blog & stuff'}</Slogan>
          <Nav>
            <ul>
              <li>Latest</li>
              <li>
                Categories <img src={chevron} alt='chevron_down' />
              </li>
            </ul>
          </Nav>
        </LeftWrapper>

        <ThemeToggle onClick={() => setDarkTheme(!darkTheme)}>
          <img alt='theme_toggle' src={darkTheme ? moon : sun} />
        </ThemeToggle>
      </HeaderWrapper>
    </Main>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  margin-right: 16px;
`

const Slogan = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  color: var(--color-primary);
  margin-right: 64px;
`

const Nav = styled.nav`
  & ul {
    display: flex;

    & li {
      margin-right: 32px;
    }
  }
`

const ThemeToggle = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default Header
