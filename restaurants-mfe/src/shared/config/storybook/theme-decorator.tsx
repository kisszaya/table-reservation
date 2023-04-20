import { type StoryFn } from '@storybook/react'

import { type THEME_VARIANT, ThemeProvider } from 'features/theme-provider'

export const ThemeDecorator = (theme: THEME_VARIANT) => (StoryComponent: StoryFn) => {
    return <div className={`app ${theme}`}>
        <ThemeProvider>
            <StoryComponent/>
        </ThemeProvider>
    </div>
}
