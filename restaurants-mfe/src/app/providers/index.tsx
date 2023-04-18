import { type FC, type PropsWithChildren } from 'react'

import { BrowserProvider } from './browser-provider'

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return <BrowserProvider>{children}</BrowserProvider>
}
