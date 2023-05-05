import { type IFilterValue } from '../types'
import { WORKING_TIME_STATUS } from '.'

export const workingTimeValues: IFilterValue[] = [
    {
        value: WORKING_TIME_STATUS.ALL,
        label: 'All'
    },
    {
        value: WORKING_TIME_STATUS.OPENED,
        label: 'Opened'
    }
]
