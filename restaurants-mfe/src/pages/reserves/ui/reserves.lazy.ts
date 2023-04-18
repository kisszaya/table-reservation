import { lazy } from 'react'

export const ReservesLazy = lazy(async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            resolve(import('./reserves'))
        }, 500)
    })
})
