import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveData = (state: IStateSchema) =>
    state?.createReserve ||
    createReserveInitialState
