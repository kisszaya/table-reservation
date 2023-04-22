import { createSelector } from '@reduxjs/toolkit'

import { getCounter } from '..'
import { type ICounterSchema } from '../../types'

export const getCounterValue = createSelector(
    getCounter, (counter: ICounterSchema) => counter.value
)
