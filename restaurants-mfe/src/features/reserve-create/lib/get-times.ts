import { type IAggregatorRestaurant, type WEEKDAY } from 'kisszaya-table-reservation/lib/interfaces'

interface Props {
    workingTime: IAggregatorRestaurant['workingTime']
    selectedDay: number | null
    selectedMonth: number | null
}

export const getTimes = (props: Props): string[] => {
    const { workingTime, selectedMonth, selectedDay } = props

    if (!selectedDay || !selectedMonth) {
        return []
    }

    const currentDate = new Date()
    const date = new Date(currentDate.getFullYear(), selectedMonth - 1, selectedDay)
    const weekday = (date.getDay() + 6) % 7 as WEEKDAY

    const workingTimeInfo = workingTime[weekday]

    if (!workingTimeInfo) {
        return []
    }

    const { time_to, time_from } = workingTimeInfo

    const timeFromRound = Math.ceil(time_from / 30) * 30
    const timeToRound = Math.floor(time_to / 30) * 30

    const times: string[] = []

    if (timeFromRound >= timeToRound) {
        return []
    }

    let time = timeFromRound
    do {
        times.push(`${Math.floor(time / 60)}:${time % 60}`)
        time += 30
    } while (time <= timeToRound)

    return times
}
