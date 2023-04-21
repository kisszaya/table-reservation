import { type ReactNode } from 'react'

import { ThemeProvider } from 'features/theme-provider'

export const withThemeProvider = (component: () => ReactNode) => () => {
    return (
        <ThemeProvider>
            {component()}
        </ThemeProvider>
    )
}
