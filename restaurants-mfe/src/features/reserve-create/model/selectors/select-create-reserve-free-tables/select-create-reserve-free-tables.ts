import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveFreeTables = (state: IStateSchema) =>
    state?.createReserve?.freeTables ||
    createReserveInitialState.freeTables
