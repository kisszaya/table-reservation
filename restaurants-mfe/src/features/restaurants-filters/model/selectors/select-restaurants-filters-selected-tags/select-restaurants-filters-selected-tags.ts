import { type IStateSchema } from 'app/providers/store'
import { restaurantsFiltersInitialState } from '../../slices'

export const selectRestaurantsFiltersSelectedTags = (state: IStateSchema) =>
    state?.restaurantsFilters?.selectedTags ||
    restaurantsFiltersInitialState.selectedTags
