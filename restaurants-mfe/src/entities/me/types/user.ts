import { type USER_STATUS } from 'kisszaya-table-reservation/lib/interfaces'

export interface IUser {
    fullName: string
    email: string
    phone: string
    status: USER_STATUS
}
