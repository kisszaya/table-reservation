import { createContext, type ReactNode } from 'react'

export interface IModalContext {
    open: (component: ReactNode) => void
    close: () => void
}

export const ModalContext = createContext<IModalContext | undefined>(undefined)
