import type { IRestaurantSchema } from '../types'

export const restaurantInitialState: IRestaurantSchema = {
    isLoading: false,
    error: null,
    restaurant: null
}
