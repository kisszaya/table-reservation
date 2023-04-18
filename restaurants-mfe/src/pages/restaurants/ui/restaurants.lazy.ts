import { lazy } from 'react'

export const RestaurantsLazy = lazy(async () => await import('./restaurants'))
