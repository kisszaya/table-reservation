import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { TEXT_INPUT_VARIANT, TextInput } from 'shared/ui'
import { debounce } from 'shared/lib'
import { useAppDispatch } from 'shared/lib/hooks'

import {
    restaurantsFiltersActions,
    selectRestaurantsFiltersSearchText
} from '../../model'

export const SearchRestaurantInput = () => {
    const dispatch = useAppDispatch()
    const searchText = useSelector(selectRestaurantsFiltersSearchText)
    const [value, setValue] = useState<string>(searchText)

    const search = useCallback(debounce((value: string) => {
        dispatch(restaurantsFiltersActions.setSearchText(value))
    }, 500), [])

    const onChange = (value: string) => {
        setValue(value)
        search(value)
    }

    return (
        <TextInput value={value} variant={TEXT_INPUT_VARIANT.SEARCH} onChange={onChange}/>
    )
}
