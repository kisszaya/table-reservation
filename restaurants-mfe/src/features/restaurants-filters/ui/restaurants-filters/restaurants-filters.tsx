import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from 'shared/lib/hooks'

import styles from './restaurants-filters.module.scss'

import { FilterBlock, type IFilterBlockProps, SearchRestaurantInput } from '..'
import {
    fetchTableTags,
    restaurantsFiltersActions,
    selectRestaurantsFiltersWorkingTimeStatus,
    selectRestaurantsFiltersTags,
    selectRestaurantsFiltersSelectedTags
} from '../../model'
import { workingTimeValues, type WORKING_TIME_STATUS } from '../../const'

export const RestaurantsFilters = () => {
    const dispatch = useAppDispatch()
    const workingTimeStatus = useSelector(selectRestaurantsFiltersWorkingTimeStatus)
    const tags = useSelector(selectRestaurantsFiltersTags)
    const selectedTags = useSelector(selectRestaurantsFiltersSelectedTags)

    useEffect(() => {
        dispatch(fetchTableTags())
    }, [dispatch])

    const workingHours: IFilterBlockProps = useMemo(() => ({
        title: 'Время работы',
        values: workingTimeValues,
        selectedValue: [workingTimeStatus],
        setValue: (value: string) => {
            dispatch(
                restaurantsFiltersActions.setWorkingTimeStatus(value as WORKING_TIME_STATUS)
            )
        }
    }), [dispatch, workingTimeStatus])

    const tagsFilter: IFilterBlockProps = useMemo(() => ({
        title: 'Тип столика',
        values: tags
            .sort((t1, t2) => t1.popularity - t2.popularity)
            .map(tag => ({
                value: tag.text,
                label: tag.text
            })),
        selectedValue: selectedTags,
        setValue: (value: string) => {
            dispatch(
                restaurantsFiltersActions.setTags(value)
            )
        }
    }), [dispatch, selectedTags, tags])

    return (
        <div className={styles.container}>
            <SearchRestaurantInput/>
            <FilterBlock {...workingHours}/>
            <FilterBlock {...tagsFilter}/>
        </div>
    )
}
