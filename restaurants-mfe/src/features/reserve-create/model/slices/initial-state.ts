import { type ICreateReserveSchema } from '../types'

export const createReserveInitialState: ICreateReserveSchema = {
    error: null,
    isLoading: false,
    freeTables: [],
    phone: null,
    day: null,
    email: null,
    first_name: null,
    last_name: null,
    month: null,
    persons_count: null,
    table_id: null,
    hours: null,
    minutes: null
}
