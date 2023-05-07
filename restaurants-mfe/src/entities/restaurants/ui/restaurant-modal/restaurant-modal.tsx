import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import {
    fetchRestaurantById,
    selectRestaurantData,
    selectRestaurantIsLoading
} from 'entities/restaurants/model'
import { Loader } from 'shared/ui'
import { useAppDispatch } from 'shared/lib/hooks'

interface Props {
    restaurant_id: number
}

export const RestaurantModal = (props: Props) => {
    const { restaurant_id } = props
    const dispatch = useAppDispatch()
    const restaurant = useSelector(selectRestaurantData)
    const isLoading = useSelector(selectRestaurantIsLoading)

    useEffect(() => {
        dispatch(fetchRestaurantById({ restaurant_id }))
    }, [dispatch, restaurant_id])

    if (isLoading || !restaurant) {
        return <Loader/>
    }

    return <div>
        {restaurant.name}
    </div>
}
