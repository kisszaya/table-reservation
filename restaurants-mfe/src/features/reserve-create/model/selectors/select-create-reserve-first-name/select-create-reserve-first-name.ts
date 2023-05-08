import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveFirstName = (state: IStateSchema) =>
    state?.createReserve?.first_name ||
    createReserveInitialState.first_name
