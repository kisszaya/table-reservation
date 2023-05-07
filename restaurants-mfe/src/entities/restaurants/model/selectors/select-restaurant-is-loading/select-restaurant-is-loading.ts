import { type IStateSchema } from 'app/providers/store'
import { restaurantInitialState } from '../../slices'

export const selectRestaurantIsLoading = (state: IStateSchema) =>
    state?.restaurant?.isLoading ||
    restaurantInitialState.isLoading
