import { type IAggregatorRestaurant } from 'kisszaya-table-reservation/lib/interfaces'

export interface IRestaurantSchema {
    isLoading: boolean
    error: string | null
    restaurant: IAggregatorRestaurant | null
}
