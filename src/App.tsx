import React, { useState, useEffect, Fragment } from 'react'
import Prism from 'prismjs'
import './css/deniz_prism_theme.css'
import Header from './components/Header'
import ThemeContext from './components/ThemeContext'
import { createGlobalStyle } from 'styled-components'
import './css/App.css'
import PostList from './components/PostList'
import Main from './components/Main'
import ProjectList from './components/ProjectList'
import { getThemeLocalStorage } from './components/utils/themeLocalStorage'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(getThemeLocalStorage())
  const themeValue = { darkTheme, setDarkTheme }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <ThemeContext.Provider value={themeValue}>
      {darkTheme ? <DarkTheme /> : <LightTheme />}

      <Header />
      <Main>
        <Fragment>
          <PostList />
          <ProjectList />
        </Fragment>
      </Main>
    </ThemeContext.Provider>
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

export default App
