import { type FC, type PropsWithChildren } from 'react'

import { BrowserProvider } from './browser-provider'
import { ErrorBoundary } from './error-boundary'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <BrowserProvider>
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </BrowserProvider>
    )
}
