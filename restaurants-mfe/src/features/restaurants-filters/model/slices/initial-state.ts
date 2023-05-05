import { WORKING_TIME_STATUS } from '../../const'
import type { IRestaurantsFiltersSchema } from '../types'

export const restaurantsFiltersInitialState: IRestaurantsFiltersSchema = {
    isLoading: false,
    error: null,
    searchText: '',
    selectedTags: [],
    tags: [],
    workingTimeStatus: WORKING_TIME_STATUS.ALL
}
