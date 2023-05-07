import { DynamicModuleLoader, type IReducersList } from 'shared/lib/ui'
import { RestaurantsFilters, restaurantsFiltersReducer } from 'features/restaurants-filters'

import {
    restaurantReducer,
    RestaurantsPreviewList,
    restaurantsReducer
} from 'entities/restaurants'

import styles from './restaurants.module.scss'

const asyncReducers: IReducersList = {
    restaurantsFilters: restaurantsFiltersReducer,
    restaurant: restaurantReducer,
    restaurants: restaurantsReducer
}

const Restaurants = () => {
    return (
        <DynamicModuleLoader reducers={asyncReducers}>
            <div className={styles.container}>
                <RestaurantsPreviewList/>
                <RestaurantsFilters/>
            </div>
        </DynamicModuleLoader>
    )
}

export default Restaurants
