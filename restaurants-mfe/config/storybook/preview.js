import { StyleDecorator, ThemeDecorator, RouterDecorator } from '../../src/shared/config/storybook'
import { THEME_VARIANT } from '../../src/features/theme-provider'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

export const decorators = [
    StyleDecorator,
    ThemeDecorator(THEME_VARIANT.LIGHT),
    RouterDecorator
]
