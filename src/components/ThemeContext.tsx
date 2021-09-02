import { createContext } from 'react'

interface IThemeContext {
  setDarkTheme: (darkTheme: boolean) => void
  darkTheme: boolean
}

const ThemeContext = createContext<IThemeContext>({
  setDarkTheme: (darkTheme) => {},
  darkTheme: true,
})

export default ThemeContext
