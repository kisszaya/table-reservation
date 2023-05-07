import { type IAggregatorRestaurantPreview } from 'kisszaya-table-reservation/lib/interfaces'

export interface IRestaurantsSchema {
    isLoading: boolean
    error: string | null
    restaurantPreviews: IAggregatorRestaurantPreview[]
}
