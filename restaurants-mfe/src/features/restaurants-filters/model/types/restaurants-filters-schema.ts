import { type IPreviewTag } from 'kisszaya-table-reservation/lib/interfaces'
import { type WORKING_TIME_STATUS } from '../../const'

export interface IRestaurantsFiltersSchema {
    isLoading: boolean
    error: string | null
    searchText: string
    workingTimeStatus: WORKING_TIME_STATUS
    selectedTags: string[]
    tags: IPreviewTag[]
}
