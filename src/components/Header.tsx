import React from 'react'
import styled from 'styled-components'
import logoWhite from '../img/logoWhite.svg'
import logoDark from '../img/logoDark.svg'
import moon from '../img/moon.svg'
import sun from '../img/sun.svg'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'
import Chevron from './icons/Chevron'
import Burger from './icons/Burger'

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
        <BurgerStyled fill={'var(--color-paragraph)'} />
        <ThemeToggle onClick={() => setDarkTheme(!darkTheme)}>
          <img alt='theme_toggle' src={darkTheme ? moon : sun} />
        </ThemeToggle>
      </RightWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 64px 0;

  @media only screen and (max-width: 1100px) {
    padding: 32px 64px;
  }

  @media only screen and (max-width: 720px) {
    padding: 32px;
  }
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

  @media only screen and (max-width: 720px) {
    display: none;
  }
`

const Nav = styled.nav`
  & ul {
    display: flex;

    & li {
      margin-right: 32px;
    }
  }

  @media only screen and (max-width: 720px) {
    display: none;
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

const BurgerStyled = styled(Burger)`
  display: none;
  margin-right: 16px;

  @media only screen and (max-width: 720px) {
    display: inline-block;
  }
`

export default Header
