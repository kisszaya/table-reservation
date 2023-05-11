import { type ITablePreview } from 'kisszaya-table-reservation/lib/interfaces'

export interface ICreateReserveSchema {
    freeTables: ITablePreview[]
    isLoading: boolean
    error: string | null
    day: number | null
    month: number | null
    hours: number | null
    minutes: number | null
    table_id: number | null
    persons_count: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    email: string | null
}
