import * as React from 'react'
import { type ComponentStory, type Meta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook'
import { THEME_VARIANT } from 'features/theme-provider'
import { Navbar } from './navbar'

export default {
    title: 'widgets/navbar',
    component: Navbar
} as Meta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME_VARIANT.DARK)]
