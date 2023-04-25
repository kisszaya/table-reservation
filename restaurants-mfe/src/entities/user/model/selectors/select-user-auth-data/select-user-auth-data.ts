import { type IStateSchema } from 'app/providers/store'

export const selectUserAuthData = (state: IStateSchema) => state.user.authData
