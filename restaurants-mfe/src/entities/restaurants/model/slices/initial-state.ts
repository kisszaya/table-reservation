import type { IRestaurantsSchema } from '../types'

export const restaurantsFiltersInitialState: IRestaurantsSchema = {
    isLoading: false,
    error: null,
    restaurantPreviews: []
}
