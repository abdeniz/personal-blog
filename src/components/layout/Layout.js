import React, { useState, useEffect } from 'react'
import { getThemeLocalStorage, ThemeContext } from '../../utils'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import MobileMenu from './MobileMenu'

const Layout = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState()
  const themeValue = { darkTheme, setDarkTheme }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setDarkTheme(getThemeLocalStorage())
  }, [])

  return (
    <div>
      <ThemeContext.Provider value={themeValue}>
        {darkTheme ? <DarkTheme /> : <LightTheme />}
        <MobileMenu
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />
        <Header setMobileMenuOpen={setMobileMenuOpen} />
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

const LightTheme = createGlobalStyle`
  :root {
    --color-paragraph: #23436A;
    --color-background: #fafeff;
    --color-tag-background: #3591ff;
    --color-tag-text: #fafeff;
    --color-code-background: #ECECED;
    --color-comment: #d2d2d2;
  }
  .icon-color {
    fill: #23436A;
  }
`

const DarkTheme = createGlobalStyle`
  :root {
    --color-paragraph: #fafeff;
    --color-background: #0D1B2C;
    --color-tag-background: #23436A;
    --color-tag-text: #3591ff;
    --color-code-background: #112235;
    --color-comment: #23436A;
  }
  .icon-color {
    fill: #fafeff;
  }
`

export default Layout
