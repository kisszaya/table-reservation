import * as React from 'react'
import { type Meta, type StoryFn } from '@storybook/react'

import { BUTTON_VARIANT } from 'shared/ui'
import { Button } from './button'

export default {
    title: 'shared/button',
    component: Button
} as Meta

export const Clear: StoryFn = (args) => <Button {...args} />
Clear.args = {
    children: 'Button',
    variant: BUTTON_VARIANT.CLEAR
}

export const Outline: StoryFn = (args) => <Button {...args} />
Outline.args = {
    children: 'Button',
    variant: BUTTON_VARIANT.OUTLINE
}
export const Default: StoryFn = (args) => <Button {...args} />
Default.args = {
    children: 'Button'
}
