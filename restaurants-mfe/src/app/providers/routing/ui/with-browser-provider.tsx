import { type ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withBrowserProvider = (component: () => ReactNode) => () => {
    return (
        <BrowserRouter>
            {component()}
        </BrowserRouter>
    )
}
