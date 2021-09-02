import React, { useState, useEffect, Fragment } from 'react'
import Prism from 'prismjs'
import './css/deniz_prism_theme.css'
import Header from './components/Header'
import ThemeContext from './components/ThemeContext'
import { createGlobalStyle } from 'styled-components'
import './css/App.css'
import PostList from './components/PostList'
import Main from './components/Main'
import LeftColumn from './components/Layout/LeftColumn'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  const themeValue = { darkTheme, setDarkTheme }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <ThemeContext.Provider value={themeValue}>
      {darkTheme ? <DarkTheme /> : <LightTheme />}
      <Main>
        <Fragment>
          <Header />
          <LeftColumn>
            <PostList />
          </LeftColumn>
          {/* <ProjectList /> */}
        </Fragment>
      </Main>
    </ThemeContext.Provider>
  )
}

const LightTheme = createGlobalStyle`
  :root {
    --color-paragraph: #23436A;
    --color-background: #fafeff;
  }

  .icon-color {
    fill: #23436A;
  }
`

const DarkTheme = createGlobalStyle`
  :root {
    --color-paragraph: #fafeff;
    --color-background: #0D1B2C;
  }

  .icon-color {
    fill: #fafeff;
  }
`

export default App
