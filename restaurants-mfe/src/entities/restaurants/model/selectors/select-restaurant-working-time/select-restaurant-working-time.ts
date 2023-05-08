import { type IStateSchema } from 'app/providers/store'

export const selectRestaurantWorkingTime = (state: IStateSchema) =>
    state?.restaurant?.restaurant?.workingTime ||
    {}
