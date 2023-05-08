import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveError = (state: IStateSchema) =>
    state?.createReserve?.error ||
    createReserveInitialState.error
