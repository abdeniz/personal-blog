import React, { useState, useEffect } from 'react'
import Prism from 'prismjs'
import './css/deniz_prism_theme.css'
import Header from './components/Header'
import ThemeContext from './components/ThemeContext'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  const themeValue = { darkTheme, setDarkTheme }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <ThemeContext.Provider value={themeValue}>
      <Header />
    </ThemeContext.Provider>
  )
}

export default App
