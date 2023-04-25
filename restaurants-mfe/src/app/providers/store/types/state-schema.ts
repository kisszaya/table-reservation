import { type ICounterSchema } from 'entities/counter'
import { type ILoginByPhoneSchema } from 'features/auth-by-phone'
import { type IUserSchema } from 'entities/user'

export interface IStateSchema {
    counter: ICounterSchema
    user: IUserSchema

    // async reducers
    loginByPhone?: ILoginByPhoneSchema
}

export type IStateSchemaKey = keyof IStateSchema
