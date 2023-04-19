import * as React from 'react'
import { type Meta, type Story } from '@storybook/react'
import { Button } from './button'

export default {
    title: 'shared/Button',
    component: Button
} as Meta

export const Primary: Story = (args) => <Button {...args} />
Primary.args = {
    label: 'Button',
    primary: true
}

// import React from 'react'
// import { type ComponentStory, type ComponentMeta } from '@storybook/react'
//
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
// import { Theme } from 'app/providers/ThemeProvider'
// import { Button, ThemeButton } from './Button'
//
// export default {
//     title: 'shared/Button',
//     component: Button,
//     argTypes: {
//         backgroundColor: { control: 'color' }
//     }
// } as ComponentMeta<typeof Button>
//
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
//
// export const Primary = Template.bind({})
// Primary.args = {
//     children: 'Text'
// }
//
// export const Clear = Template.bind({})
// Clear.args = {
//     children: 'Text',
//     theme: ThemeButton.CLEAR
// }
//
// export const Outline = Template.bind({})
// Outline.args = {
//     children: 'Text',
//     theme: ThemeButton.OUTLINE
// }
//
// export const OutlineDark = Template.bind({})
// OutlineDark.args = {
//     children: 'Text',
//     theme: ThemeButton.OUTLINE
// }
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
