import { type ReactNode } from 'react'

import { ErrorBoundary } from '..'

export const withErrorBoundary = (component: () => ReactNode) => () => {
    return (
        <ErrorBoundary>
            {component()}
        </ErrorBoundary>
    )
}
