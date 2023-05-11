import { type ReactNode, useEffect } from 'react'

import { ThemeProvider } from 'features/theme-provider'

export const withThemeProvider = (component: () => ReactNode) => () => {
    useEffect(() => {
        console.log('meow withThemeProvider')
    }, [])

    return (
        <ThemeProvider>
            {component()}
        </ThemeProvider>
    )
}
