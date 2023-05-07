import type { IRestaurantsSchema } from '../types'

export const restaurantsInitialState: IRestaurantsSchema = {
    isLoading: false,
    error: null,
    restaurantPreviews: []
}
