import { type IVisitorReservePreview } from 'kisszaya-table-reservation/lib/interfaces'

import { useAppDispatch } from 'shared/lib/hooks'
import { type IInfoField } from 'widgets/info-field'

import { cancelReserve } from '../../model'

interface Returned {
    onCancelReserve: () => void
    tableInfo: IInfoField[]
    restaurantInfo: IInfoField[]
}

export const useData = (
    props: Omit<IVisitorReservePreview, 'status'>
): Returned => {
    const dispatch = useAppDispatch()
    const {
        reserve_id,
        time,
        table,
        persons_count,
        restaurant_address,
        restaurant_name
    } = props

    const tableInfo: Returned['tableInfo'] = [{
        label: 'Описание столика',
        value: table.description
    }, {
        label: 'Количество человек',
        value: persons_count
    }]

    const restaurantInfo: Returned['restaurantInfo'] = [{
        label: 'Название ресторана',
        value: restaurant_name
    }, {
        label: 'Адрес ресторана',
        value: restaurant_address
    }, {
        label: 'Время брони',
        value: time
    }]

    const onCancelReserve: Returned['onCancelReserve'] = () => {
        dispatch(cancelReserve({ reserve_id }))
    }

    return {
        onCancelReserve,
        restaurantInfo,
        tableInfo
    }
}
