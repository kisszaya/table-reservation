import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from 'shared/lib/hooks'
import { Loader } from 'shared/ui'

import styles from './restaurants-preview-list.module.scss'

import { RestaurantPreviewCard } from '../../ui'

import {
    fetchRestaurants,
    selectRestaurantsIsLoading,
    selectRestaurantsPreviews
} from '../../model'

export const RestaurantsPreviewList = () => {
    const dispatch = useAppDispatch()
    const restaurants = useSelector(selectRestaurantsPreviews)
    const isLoading = useSelector(selectRestaurantsIsLoading)

    useEffect(() => {
        if (restaurants.length === 0) {
            dispatch(fetchRestaurants())
        }
    }, [dispatch, restaurants])

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div className={styles.container}>
            {
                restaurants.map(restaurant => (
                    <RestaurantPreviewCard {...restaurant} key={restaurant.restaurant_id}/>
                ))
            }
        </div>
    )
}
