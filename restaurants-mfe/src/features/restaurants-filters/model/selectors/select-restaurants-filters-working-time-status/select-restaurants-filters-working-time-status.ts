import { type IStateSchema } from 'app/providers/store'
import { restaurantsFiltersInitialState } from '../../slices'

export const selectRestaurantsFiltersWorkingTimeStatus = (state: IStateSchema) =>
    state?.restaurantsFilters?.workingTimeStatus ||
    restaurantsFiltersInitialState.workingTimeStatus
