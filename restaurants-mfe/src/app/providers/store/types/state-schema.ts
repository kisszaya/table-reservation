import { type ICounterSchema } from 'entities/counter'
import { type IUserSchema } from 'entities/user'
import { type ILoginByPhoneSchema } from 'features/auth-by-phone'
import { type IUserProfileSchema } from 'features/editable-user-profile-card'
import { type IRestaurantsFiltersSchema } from 'features/restaurants-filters'
import { type IRestaurantSchema, type IRestaurantsSchema } from 'entities/restaurants'
import { type ICreateReserveSchema } from 'features/reserve-create'

export interface IStateSchema {
    counter: ICounterSchema
    user: IUserSchema

    // async reducers
    loginByPhone?: ILoginByPhoneSchema
    userProfile?: IUserProfileSchema
    restaurantsFilters?: IRestaurantsFiltersSchema
    restaurant?: IRestaurantSchema
    restaurants?: IRestaurantsSchema
    createReserve?: ICreateReserveSchema
}

export type IStateSchemaKey = keyof IStateSchema
