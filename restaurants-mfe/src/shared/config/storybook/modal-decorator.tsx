
import { type StoryFn } from '@storybook/react'

import { ModalProvider } from 'shared/ui'

export const ModalDecorator = (StoryComponent: StoryFn) => {
    return (
        <ModalProvider>
            <StoryComponent/>
        </ModalProvider>
    )
}
