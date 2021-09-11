import React, { useState, useEffect } from 'react'
import { getThemeLocalStorage, ThemeContext } from '../../utils'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'

const Layout = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState()
  const themeValue = { darkTheme, setDarkTheme }

  useEffect(() => {
    setDarkTheme(getThemeLocalStorage())
  }, [])

  return (
    <div>
      <ThemeContext.Provider value={themeValue}>
        {darkTheme ? <DarkTheme /> : <LightTheme />}
        <Header />
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
  }
  .icon-color {
    fill: #fafeff;
  }
`

export default Layout
