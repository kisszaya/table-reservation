import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveHours = (state: IStateSchema) =>
    state?.createReserve?.hours ||
    createReserveInitialState.hours
