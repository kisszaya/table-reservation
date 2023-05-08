import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveTableId = (state: IStateSchema) =>
    state?.createReserve?.table_id ||
    createReserveInitialState.table_id
