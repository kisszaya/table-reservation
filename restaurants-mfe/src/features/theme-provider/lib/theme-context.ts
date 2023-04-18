import { createContext } from 'react'

import { type THEME_VARIANT } from '../const'

export interface IThemeContext {
  theme: THEME_VARIANT
  setTheme: (theme: THEME_VARIANT) => void
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)
