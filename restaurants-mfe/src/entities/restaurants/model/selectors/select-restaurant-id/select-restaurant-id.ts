import { type IStateSchema } from 'app/providers/store'

export const selectRestaurantId = (state: IStateSchema) =>
    state?.restaurant?.restaurant?.restaurant_id ||
    -1
