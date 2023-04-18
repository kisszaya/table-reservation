import { type FC, type PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const BrowserProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}
