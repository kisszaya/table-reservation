import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveLastName = (state: IStateSchema) =>
    state?.createReserve?.last_name ||
    createReserveInitialState.last_name
