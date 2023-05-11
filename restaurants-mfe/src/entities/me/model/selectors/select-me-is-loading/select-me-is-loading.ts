import { type IStateSchema } from 'app/providers/store'

export const selectMeIsLoading = (state: IStateSchema) => state.me.isLoading
