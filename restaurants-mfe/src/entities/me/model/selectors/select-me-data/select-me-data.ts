import { type IStateSchema } from 'app/providers/store'

export const selectMeData = (state: IStateSchema) => state.me.me
