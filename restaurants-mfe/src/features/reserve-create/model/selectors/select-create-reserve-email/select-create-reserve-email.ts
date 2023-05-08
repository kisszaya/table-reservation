import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveEmail = (state: IStateSchema) =>
    state?.createReserve?.email ||
    createReserveInitialState.email
