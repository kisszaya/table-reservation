import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReservePhone = (state: IStateSchema) =>
    state?.createReserve?.phone ||
    createReserveInitialState.phone
