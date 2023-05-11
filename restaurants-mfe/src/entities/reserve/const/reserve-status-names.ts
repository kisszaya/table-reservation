import { RESERVE_STATUS } from 'kisszaya-table-reservation/lib/interfaces'

export const reserveStatusNames: Record<RESERVE_STATUS, string> = {
    [RESERVE_STATUS.ACTIVE]: 'Сейчас в ресторане',
    [RESERVE_STATUS.CREATED]: 'Создана',
    [RESERVE_STATUS.CLOSED]: 'Закрыта',
    [RESERVE_STATUS.CANCELED]: 'Отменена'
}
