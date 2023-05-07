
export interface IReserve {
    reserve_id?: number
    table_id: number
    status: RESERVE_STATUS
    user_id: number
    time: string
    persons_count: number
    source: RESERVE_SOURCE
}

export enum RESERVE_STATUS {
    CREATED = 'created',
    CLOSED = 'closed',
    CANCELED = 'canceled',
    ACTIVE = 'active'
}

export enum RESERVE_SOURCE {
    WALKED_IN = 'walked_in',
    PHONE = 'phone',
    TELEGRAM = 'telegram'
}