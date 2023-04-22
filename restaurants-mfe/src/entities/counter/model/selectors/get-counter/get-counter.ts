import { type IStateSchema } from 'app/providers/store'

export const getCounter = (state: IStateSchema) => state.counter
