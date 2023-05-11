import { type IStateSchema } from 'app/providers/store'
import { reservesInitialState } from '../../slices'

export const selectReservesIsLoading = (state: IStateSchema) =>
    state?.reserves?.isLoading ||
    reservesInitialState.isLoading
