import { type ICounterSchema } from 'entities/counter'
import { type IMeSchema } from 'entities/me'
import { type ILoginByPhoneSchema } from 'features/auth-by-phone'
import { type IUserProfileSchema } from 'features/editable-user-profile-card'
import { type IRestaurantsFiltersSchema } from 'features/restaurants-filters'
import { type IRestaurantSchema, type IRestaurantsSchema } from 'entities/restaurants'
import { type ICreateReserveSchema } from 'features/reserve-create'
import { type IReservesSchema } from 'entities/reserve'

export interface IStateSchema {
    counter: ICounterSchema
    me: IMeSchema

    // async reducers
    loginByPhone?: ILoginByPhoneSchema
    userProfile?: IUserProfileSchema
    restaurantsFilters?: IRestaurantsFiltersSchema
    restaurant?: IRestaurantSchema
    restaurants?: IRestaurantsSchema
    createReserve?: ICreateReserveSchema
    reserves?: IReservesSchema
}

export type IStateSchemaKey = keyof IStateSchema
