import { WEEKDAY } from 'kisszaya-table-reservation/lib/interfaces'

export const weekdayShortNames: Record<WEEKDAY, string> = {
    [WEEKDAY.MONDAY]: 'пн',
    [WEEKDAY.TUESDAY]: 'вт',
    [WEEKDAY.WEDNESDAY]: 'ср',
    [WEEKDAY.THURSDAY]: 'чт',
    [WEEKDAY.FRIDAY]: 'пт',
    [WEEKDAY.SATURDAY]: 'сб',
    [WEEKDAY.SUNDAY]: 'вс'
}
