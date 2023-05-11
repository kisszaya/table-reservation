import { type ReactNode, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withBrowserProvider = (component: () => ReactNode) => () => {
    useEffect(() => {
        console.log('meow withBrowserProvider')
    }, [])

    return (
        <BrowserRouter>
            {component()}
        </BrowserRouter>
    )
}
