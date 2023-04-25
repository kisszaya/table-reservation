import { type ICounterSchema } from 'entities/counter'
import { type IUserSchema } from 'entities/user'
import { type ILoginByPhoneSchema } from 'features/auth-by-phone'
import { type IUserProfileSchema } from 'features/editable-user-profile-card'

export interface IStateSchema {
    counter: ICounterSchema
    user: IUserSchema

    // async reducers
    loginByPhone?: ILoginByPhoneSchema
    userProfile?: IUserProfileSchema
}

export type IStateSchemaKey = keyof IStateSchema
