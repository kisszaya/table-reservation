import { type IUser } from '../..'

export interface IMeSchema {
    me: IUser | null
    isLoading: boolean
    error: string | null
    accessToken: string | null
}
