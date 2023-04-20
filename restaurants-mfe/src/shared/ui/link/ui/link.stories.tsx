import * as React from 'react'
import { type ComponentStory, type Meta } from '@storybook/react'

import { Link } from './link'
import { LINK_VARIANT } from '../const'

export default {
    title: 'shared/link',
    component: Link,
    args: {
        to: '/'
    }
} as Meta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Link'
}

export const Inverted = Template.bind({})
Inverted.args = {
    children: 'Link',
    variant: LINK_VARIANT.INVERTED
}
