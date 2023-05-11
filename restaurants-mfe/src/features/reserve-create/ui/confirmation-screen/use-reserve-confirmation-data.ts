import { useSelector } from 'react-redux'
import { selectRestaurantData } from 'entities/restaurants'
import {
    selectCreateReserveDay,
    selectCreateReserveFirstName,
    selectCreateReserveHours,
    selectCreateReserveMinutes,
    selectCreateReserveMonth,
    selectCreateReservePersonsCount,
    selectCreateReservePhone
} from '../../model'
import { monthNames } from '../../const'

interface Returned {
    leftData: string[]
    rightData: Array<{ label: string, value: string }>
}

export const useReserveConfirmationData = (): Returned => {
    const restaurant = useSelector(selectRestaurantData)
    const phone = useSelector(selectCreateReservePhone)
    const firstName = useSelector(selectCreateReserveFirstName)
    const personsCount = useSelector(selectCreateReservePersonsCount)
    const hours = useSelector(selectCreateReserveHours)
    const minutes = useSelector(selectCreateReserveMinutes)
    const day = useSelector(selectCreateReserveDay)
    const month = useSelector(selectCreateReserveMonth)

    if (
        !restaurant ||
        !phone ||
        !firstName ||
        !personsCount ||
        !day ||
        !month ||
        !hours ||
        !minutes) {
        throw new Error('error')
    }

    const leftData: Returned['leftData'] = [
        restaurant.name,
        `${day} ${monthNames[month]}`,
        `${hours}:${minutes}`
    ]

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
