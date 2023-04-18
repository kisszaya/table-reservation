import { lazy } from 'react'

export const ReservesLazy = lazy(async () => await import('./reserves'))
