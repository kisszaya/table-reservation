import { type FC, type PropsWithChildren, useMemo, useState } from 'react'

import { getFromLocalStorage } from 'shared/lib'
import { type IThemeContext, ThemeContext } from '../lib'
import { LOCAL_STORAGE_THEME_KEY, THEME_VARIANT } from '../const'

const localStorageTheme = getFromLocalStorage(
    LOCAL_STORAGE_THEME_KEY,
    THEME_VARIANT.LIGHT
) as THEME_VARIANT

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<THEME_VARIANT>(localStorageTheme)

    const values: IThemeContext = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme, setTheme]
    )

    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    )
}
