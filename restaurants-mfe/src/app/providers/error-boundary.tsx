import { type FC, type PropsWithChildren } from 'react'

import { ErrorBoundary as ErrorBoundaryComponent } from 'widgets/error-boundary'

export const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ErrorBoundaryComponent>
            {children}
        </ErrorBoundaryComponent>
    )
}
