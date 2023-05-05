import { type IStateSchema } from 'app/providers/store'
import { restaurantsFiltersInitialState } from '../../slices'

export const selectRestaurantsFiltersSearchText = (state: IStateSchema) =>
    state?.restaurantsFilters?.searchText ||
    restaurantsFiltersInitialState.searchText
