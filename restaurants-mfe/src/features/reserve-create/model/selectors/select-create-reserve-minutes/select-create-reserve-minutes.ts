import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveMinutes = (state: IStateSchema) =>
    state?.createReserve?.minutes ||
    createReserveInitialState.minutes
