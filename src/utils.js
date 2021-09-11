import { createContext } from 'react'

export const getThemeLocalStorage = () => {
  const themeValueString = localStorage.getItem('darkTheme')

  return themeValueString ? JSON.parse(themeValueString) : true
}

export const setThemeLocalStorage = darkTheme => {
  localStorage.setItem('darkTheme', darkTheme.toString())
}

export const ThemeContext = createContext({
  setDarkTheme: () => {},
  darkTheme: true,
})
