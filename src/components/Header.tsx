import React from 'react'
import styled from 'styled-components'
import logoWhite from '../img/logoWhite.svg'
import logoDark from '../img/logoDark.svg'
import moon from '../img/moon.svg'
import sun from '../img/sun.svg'
import Main from './Main'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'
import Chevron from './icons/Chevron'

const Header = () => {
  const { setDarkTheme, darkTheme } = useContext(ThemeContext)

  return (
    <HeaderWrapper>
      <LeftWrapper>
        <Logo src={darkTheme ? logoWhite : logoDark} alt='logo' />
        <Slogan>{'|  dev blog & stuff'}</Slogan>
      </LeftWrapper>
      <RightWrapper>
        <Nav>
          <ul>
            <li>Latest</li>
            <li>
              Categories <Chevron fill={'var(--color-paragraph)'} />
            </li>
          </ul>
        </Nav>
        <ThemeToggle onClick={() => setDarkTheme(!darkTheme)}>
          <img alt='theme_toggle' src={darkTheme ? moon : sun} />
        </ThemeToggle>
      </RightWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 64px 0;
`

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  margin-right: 16px;
`

const Slogan = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  color: var(--color-primary);
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
