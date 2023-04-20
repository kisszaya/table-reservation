import * as React from 'react'
import { type ComponentStory, type Meta } from '@storybook/react'

import { Loader } from './loader'

export default {
    title: 'shared/loader',
    component: Loader
} as Meta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {
}
