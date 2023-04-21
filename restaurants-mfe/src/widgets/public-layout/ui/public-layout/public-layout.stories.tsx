import * as React from 'react'
import { type ComponentStory, type Meta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook'
import { THEME_VARIANT } from 'features/theme-provider'
import { PublicLayout } from './public-layout'

export default {
    title: 'widgets/public-layout',
    component: PublicLayout
} as Meta<typeof PublicLayout>

const Template: ComponentStory<typeof PublicLayout> = (args) => <PublicLayout {...args} />

export const Light = Template.bind({})
Light.args = {
    children: 'Content'
}

export const Dark = Template.bind({})
Dark.args = {
    children: 'Content'
}
Dark.decorators = [ThemeDecorator(THEME_VARIANT.DARK)]
