import { type IStateSchema } from 'app/providers/store'

export const selectMe = (state: IStateSchema) => state.me
