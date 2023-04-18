import { type FC, type PropsWithChildren, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const BrowserProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
        </BrowserRouter>
    )
}
