import * as React from 'react'
import { type ComponentStory, type Meta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook'
import { THEME_VARIANT } from 'features/theme-provider'
import { LanguageSwitcher } from './language-switcher'

export default {
    title: 'widgets/language-switcher',
    component: LanguageSwitcher
} as Meta<typeof LanguageSwitcher>

const Template: ComponentStory<typeof LanguageSwitcher> = () => <LanguageSwitcher />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME_VARIANT.DARK)]
