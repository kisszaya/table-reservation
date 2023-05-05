import { type IStateSchema } from 'app/providers/store'
import { restaurantsFiltersInitialState } from '../../slices'

export const selectRestaurantsFiltersTags = (state: IStateSchema) =>
    state?.restaurantsFilters?.tags ||
    restaurantsFiltersInitialState.tags
