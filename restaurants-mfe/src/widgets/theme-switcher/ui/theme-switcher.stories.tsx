import * as React from 'react'
import { type ComponentStory, type Meta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook'
import { THEME_VARIANT } from 'features/theme-provider'
import { ThemeSwitcher } from './theme-switcher'

export default {
    title: 'widgets/theme-switcher',
    component: ThemeSwitcher
} as Meta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME_VARIANT.DARK)]
