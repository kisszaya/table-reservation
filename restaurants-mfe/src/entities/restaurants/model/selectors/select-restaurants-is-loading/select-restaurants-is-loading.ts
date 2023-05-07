import { type IStateSchema } from 'app/providers/store'
import { restaurantsInitialState } from '../../slices'

export const selectRestaurantsIsLoading = (state: IStateSchema) =>
    state?.restaurants?.isLoading ||
    restaurantsInitialState.isLoading
