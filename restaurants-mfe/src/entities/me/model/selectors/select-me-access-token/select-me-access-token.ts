import { type IStateSchema } from 'app/providers/store'

export const selectMeAccessToken = (state: IStateSchema) => state.me.accessToken
