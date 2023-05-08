import { type IStateSchema } from 'app/providers/store'
import { createReserveInitialState } from '../../slices'

export const selectCreateReservePersonsCount = (state: IStateSchema) =>
    state?.createReserve?.persons_count ||
    createReserveInitialState.persons_count
