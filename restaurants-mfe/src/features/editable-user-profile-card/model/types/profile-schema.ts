import { type IProfile } from 'entities/profile'

export interface IUserProfileSchema {
    form: IProfile
    data: IProfile
    editable: boolean
    isLoading: boolean
    error: string | null
}
