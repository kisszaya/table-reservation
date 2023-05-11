import { type IStateSchema } from 'app/providers/store'
import { reservesInitialState } from '../../slices'

export const selectReservesError = (state: IStateSchema) =>
    state?.reserves?.error ||
    reservesInitialState.error
