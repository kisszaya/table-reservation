import { type IVisitorReservePreview } from 'kisszaya-table-reservation/lib/interfaces'

export interface IReservesSchema {
    isLoading: boolean
    error: string | null
    reserves: IVisitorReservePreview[]
}
