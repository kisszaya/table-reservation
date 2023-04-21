import { useCallback, useContext } from 'react'

import { setInLocalStorage } from 'shared/lib'
import { THEME_VARIANT, LOCAL_STORAGE_THEME_KEY } from '../const'
import { type IThemeContext, ThemeContext } from '.'

type ReturnedValue = Pick<IThemeContext, 'theme'> & {
  toggleTheme: () => void
}

export const useTheme = (): ReturnedValue => {
    const values = useContext(ThemeContext)
    if (!values) throw new Error('Please implement ThemeProvider')

    const { theme, setTheme } = values

    const toggleTheme = useCallback(() => {
        const newTheme =
      theme === THEME_VARIANT.DARK ? THEME_VARIANT.LIGHT : THEME_VARIANT.DARK
        setTheme(newTheme)
        setInLocalStorage(LOCAL_STORAGE_THEME_KEY, newTheme)
    }, [setTheme, theme])

    return {
        theme,
        toggleTheme
    }
}
