import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveDay = (state: IStateSchema) =>
    state?.createReserve?.day ||
    createReserveInitialState.day
