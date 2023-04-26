import { type IProfile } from 'entities/profile'
import { type VALIDATION_ERROR } from 'shared/const'

export interface IUserProfileSchema {
    form: IProfile
    data: IProfile
    editable: boolean
    isLoading: boolean
    error: string | null
    validationErrors: VALIDATION_ERROR[] | null
}
