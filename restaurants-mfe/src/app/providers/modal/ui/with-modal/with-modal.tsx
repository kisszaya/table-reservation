import { type ReactNode } from 'react'
import { ModalProvider } from 'shared/ui'

export const withModal = (component: () => ReactNode) => () => {
    return (
        <ModalProvider>
            {component()}
        </ModalProvider>
    )
}
