import { type IStateSchema } from 'app/providers/store'
import { reservesInitialState } from '../../slices'

export const selectReservesData = (state: IStateSchema) =>
    state?.reserves?.reserves ||
    reservesInitialState.reserves
