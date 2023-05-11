import { useSelector } from 'react-redux'
import { useMemo } from 'react'

import { Badge, BADGE_SIZE, BADGE_VARIANT, Title, TITLE_SIZE } from 'shared/ui'
import { selectRestaurantWorkingTime } from 'entities/restaurants'
import { getTimes } from 'features/reserve-create/lib'

import { useAppDispatch } from 'shared/lib/hooks'
import styles from './select-time.module.scss'

import {
    createReserveActions, getFreeTables,
    selectCreateReserveDay,
    selectCreateReserveHours,
    selectCreateReserveMinutes,
    selectCreateReserveMonth
} from '../../../model'

export const SelectTime = () => {
    const dispatch = useAppDispatch()
    const workingTime = useSelector(selectRestaurantWorkingTime)
    const selectedDay = useSelector(selectCreateReserveDay)
    const selectedMonth = useSelector(selectCreateReserveMonth)
    const selectedHours = useSelector(selectCreateReserveHours)
    const selectedMinutes = useSelector(selectCreateReserveMinutes)

    const times = useMemo(() => (getTimes({
        workingTime,
        selectedDay,
        selectedMonth
    })), [selectedDay, selectedMonth, workingTime])

    if (!selectedDay || !selectedMonth) {
        return null
    }

    const onSelectTime = (time: string) => {
        const [hours, minutes] = time.split(':')

        dispatch(createReserveActions.setHours(Number(hours)))
        dispatch(createReserveActions.setMinutes(!Number(minutes) ? 0 : Number(minutes)))
        dispatch(getFreeTables())

        // reset
        dispatch(createReserveActions.resetTableId())
    }

    return <div className={styles.container}>
        <Title size={TITLE_SIZE.XS}>
            Выберите время
        </Title>
        <div className={styles.badges}>
            {
                times.map(time => {
                    const active = selectedHours &&
                        selectedMinutes &&
                        time.includes(`${selectedHours}:${selectedMinutes}`)

                    return (
                        <Badge onClick={() => { onSelectTime(time) }}
                            size={BADGE_SIZE.SM}
                            key={time}
                            variant={active ? BADGE_VARIANT.FILLED : BADGE_VARIANT.OUTLINED}
                        >
                            {time}
                        </Badge>
                    )
                })
            }
        </div>
    </div>
}
