import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReserveIsLoading = (state: IStateSchema) =>
    state?.createReserve?.isLoading ||
    createReserveInitialState.isLoading
