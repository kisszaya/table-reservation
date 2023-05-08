import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveMonth = (state: IStateSchema) =>
    state?.createReserve?.month ||
    createReserveInitialState.month
