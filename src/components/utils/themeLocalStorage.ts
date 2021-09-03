export const getThemeLocalStorage = (): boolean => {
  const themeValueString = window.localStorage.getItem('darkTheme')

  return themeValueString ? JSON.parse(themeValueString) : true
}

export const setThemeLocalStorage = (darkTheme: boolean): void => {
  window.localStorage.setItem('darkTheme', darkTheme.toString())
}
