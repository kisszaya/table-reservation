import { type IAggregatorRestaurant, type WEEKDAY } from 'kisszaya-table-reservation/lib/interfaces'
import { weekdayShortNames } from '../const'

export const getDays = (
    workingTime: IAggregatorRestaurant['workingTime']
): string[] => {
    const days: string[] = []

    const today = new Date()

    for (let add = 0; add <= 14; add++) {
        const day: Date = new Date()
        day.setDate(today.getDate() + add)

        const weekday = (day.getDay() + 6) % 7 as WEEKDAY
        if (!workingTime[weekday]) {
            continue
        }

        days.push(`${day.getDate()}.${day.getMonth() + 1} | ${weekdayShortNames[weekday]}`)
    }

    return days
}
