import { type IStateSchema } from 'app/providers/store'
import { restaurantsInitialState } from '../../slices'

export const selectRestaurantsPreviews = (state: IStateSchema) =>
    state?.restaurants?.restaurantPreviews ||
    restaurantsInitialState.restaurantPreviews
