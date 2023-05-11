import * as React from 'react'
import { type ComponentStory, type Meta } from '@storybook/react'

import { ModalDecorator, StoreDecorator } from 'shared/config/storybook'
import { type IStateSchema } from 'app/providers/store'

import { LoginModal } from './login-modal'

export default {
    title: 'features/auth-by-phone/login-modal',
    component: LoginModal
} as Meta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

const store: DeepPartial<IStateSchema> = {
    me: { me: null },
    loginByPhone: { phone: '999' }
}

export const Default = Template.bind({})
Default.args = {}

Default.decorators = [StoreDecorator(store), ModalDecorator]
