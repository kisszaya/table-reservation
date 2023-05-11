import { useSelector } from 'react-redux'
import { useMemo } from 'react'

import { Badge, BADGE_SIZE, BADGE_VARIANT, Title, TITLE_SIZE } from 'shared/ui'
import { useAppDispatch } from 'shared/lib/hooks'
import { selectRestaurantWorkingTime } from 'entities/restaurants'

import styles from './select-day.module.scss'

import { getDays } from '../../../lib'
import {
    createReserveActions,
    selectCreateReserveDay,
    selectCreateReserveMonth
} from '../../../model'

export const SelectDay = () => {
    const dispatch = useAppDispatch()
    const workingTime = useSelector(selectRestaurantWorkingTime)
    const selectedDay = useSelector(selectCreateReserveDay)
    const selectedMonth = useSelector(selectCreateReserveMonth)

    const days = useMemo(() => (getDays(workingTime)), [workingTime])

    const onSelectDay = (day: string) => {
        const res = day.split(' | ')
        const [selectedDay, selectedMonth] = res[0].split('.')

        dispatch(createReserveActions.setDay(Number(selectedDay)))
        dispatch(createReserveActions.setMonth(Number(selectedMonth)))

        // reset
        dispatch(createReserveActions.resetTableId())
        dispatch(createReserveActions.resetFreeTables())
        dispatch(createReserveActions.resetMinutes())
        dispatch(createReserveActions.resetHours())
    }

    return <div className={styles.container}>
        <Title size={TITLE_SIZE.XS}>
            Выберите день
        </Title>
        <div className={styles.badges}>
            {
                days.map(day => {
                    const active = selectedDay &&
                        selectedMonth &&
                        day.includes(`${selectedDay}.${selectedMonth}`)

                    return (
                        <Badge onClick={() => { onSelectDay(day) }}
                            size={BADGE_SIZE.SM}
                            key={day}
                            variant={active ? BADGE_VARIANT.FILLED : BADGE_VARIANT.OUTLINED}
                        >
                            {day}
                        </Badge>
                    )
                })
            }
        </div>
    </div>
}
