import { useSelector } from 'react-redux'
import { selectRestaurantData } from 'entities/restaurants'
import {
    selectCreateReserveFirstName, selectCreateReservePersonsCount,
    selectCreateReservePhone
} from '../../model'

interface Returned {
    leftData: string[]
    rightData: Array<{ label: string, value: string }>
}

export const useReserveConfirmationData = (): Returned => {
    const restaurant = useSelector(selectRestaurantData)
    const phone = useSelector(selectCreateReservePhone)
    const firstName = useSelector(selectCreateReserveFirstName)
    const personsCount = useSelector(selectCreateReservePersonsCount)

    if (!restaurant || !phone || !firstName || !personsCount) {
        throw new Error('error')
    }

    const leftData: Returned['leftData'] = [restaurant.name]

    const rightData: Returned['rightData'] = [
        {
            label: 'Ваше имя',
            value: firstName
        },
        {
            label: 'Вам могут позвонить по номеру:',
            value: phone
        },
        {
            label: 'Количество человек',
            value: personsCount.toString()
        },
        {
            label: 'Телефон ресторана',
            value: restaurant.phone
        }
    ]

    return {
        rightData, leftData
    }
}
