import { type IStateSchema } from 'app/providers/store'
import { restaurantInitialState } from '../../slices'

export const selectRestaurantData = (state: IStateSchema) =>
    state?.restaurant?.restaurant ||
    restaurantInitialState.restaurant
