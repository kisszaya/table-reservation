import { DynamicModuleLoader, type IReducersList } from 'shared/lib/ui'
import { RestaurantsFilters, restaurantsFiltersReducer } from 'features/restaurants-filters'

import { RestaurantsPreviewList } from 'entities/restaurants'

import styles from './restaurants.module.scss'

const asyncReducers: IReducersList = {
    restaurantsFilters: restaurantsFiltersReducer
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
