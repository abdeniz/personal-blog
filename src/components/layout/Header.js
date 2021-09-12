/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import logoWhite from '../../images/logoWhite.svg'
import logoDark from '../../images/logoDark.svg'
import moon from '../../images/moon.svg'
import sun from '../../images/sun.svg'
import { useContext } from 'react'
import { ThemeContext } from '../../utils'
import Chevron from '../icons/Chevron'
import Burger from '../icons/Burger'
import { setThemeLocalStorage } from '../../utils'
import { Link } from 'gatsby'

const Header = ({ setMobileMenuOpen }) => {
  const { setDarkTheme, darkTheme } = useContext(ThemeContext)

  const handleClick = () => {
    setDarkTheme(!darkTheme)
    setThemeLocalStorage(!darkTheme)
  }

  return (
    <HeaderWrapper>
      <LeftWrapper>
        <Link to={'/'}>
          <Logo src={darkTheme ? logoWhite : logoDark} alt='logo' />
        </Link>
        <Slogan>{'|  dev blog & stuff'}</Slogan>
        <Nav>
          <ul>
            <Link to={'/latest'}>
              <li>Latest</li>
            </Link>
            <Categories>
              <Link to='/categories'>Categories</Link>{' '}
              <Chevron fill={'var(--color-paragraph)'} />
              <div>
                <Link to='/categories/react'>React</Link>
                <Link to='/categories/javascript'>Javascript</Link>
                <Link to='/categories/css'>CSS</Link>
              </div>
            </Categories>
          </ul>
        </Nav>
      </LeftWrapper>
      <RightWrapper>
        <div
          onClick={() => {
            setMobileMenuOpen(true)
          }}
        >
          <BurgerStyled fill={'var(--color-paragraph)'} />
        </div>
        <ThemeToggle
          onClick={() => {
            handleClick()
          }}
        >
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
    padding: 24px;
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
  margin-right: 18px;
`

const Slogan = styled.p`
  font-family: 'IBM Plex Mono', monospace;
  color: var(--color-primary);
  margin-right: 32px;
  @media only screen and (max-width: 460px) {
    display: none;
  }
`

const Nav = styled.nav`
  & ul {
    display: flex;
    align-items: center;
    & li {
      margin-right: 32px;

      &:hover {
        color: var(--color-tag-background);
      }
    }
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
`

const Categories = styled.li`
  position: relative;

  & > div {
    position: absolute;
    top: 125%;
    left: 0;

    display: flex;
    flex-direction: column;
    padding: 8px;

    background-color: var(--color-tag-background);
    opacity: 0;

    transition: all 0.2s;
    border-radius: 4px;

    &:before {
      content: '';
      border-style: solid;
      border-width: 10px 15px 10px 0;
      transform: rotate(90deg);
      border-color: transparent var(--color-tag-background) transparent
        transparent;
      position: absolute;
      top: -15px;
      left: 80%;
    }

    & > a {
      padding: 8px;
      color: var(--color-tag-text);
      transition: color 0.2s;

      &:hover {
        color: var(--color-paragraph);
      }
    }
  }

  & > svg {
    transition: transform 0.2s;
  }

  &:hover > div {
    opacity: 1;
    top: 175%;
  }

  &:hover > svg {
    transform: rotate(180deg);
  }

  & > div:hover ~ svg {
    transform: rotate(180deg);
  }
`

const ThemeToggle = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  @media only screen and (max-width: 720px) {
    position: fixed;
    bottom: 32px;
    right: 32px;
    background-color: var(--color-paragraph);
    border-radius: 50%;
    padding: 24px;
  }
`

const BurgerStyled = styled(Burger)`
  display: none;
  @media only screen and (max-width: 720px) {
    display: inline-block;
  }
`

export default Header
