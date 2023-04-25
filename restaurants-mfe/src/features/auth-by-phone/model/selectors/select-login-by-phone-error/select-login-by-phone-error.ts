import { type IStateSchema } from 'app/providers/store'
import { loginByPhoneInitialState } from '../../slices'

export const selectLoginByPhoneError = (state: IStateSchema) =>
    state?.loginByPhone?.error ||
    loginByPhoneInitialState.error
