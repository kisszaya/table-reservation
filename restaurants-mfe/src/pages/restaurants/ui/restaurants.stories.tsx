import * as React from 'react'
import { type ComponentStory, type Meta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook'
import { THEME_VARIANT } from 'features/theme-provider'
import Restaurants from './restaurants'

export default {
    title: 'pages/restaurants',
    component: Restaurants
} as Meta<typeof Restaurants>

const Template: ComponentStory<typeof Restaurants> = () => <Restaurants />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME_VARIANT.DARK)]
