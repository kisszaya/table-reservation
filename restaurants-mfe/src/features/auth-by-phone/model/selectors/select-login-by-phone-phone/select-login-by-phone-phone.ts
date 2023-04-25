import { type IStateSchema } from 'app/providers/store'
import { loginByPhoneInitialState } from '../../slices'

export const selectLoginByPhonePhone = (state: IStateSchema) =>
    state?.loginByPhone?.phone ||
    loginByPhoneInitialState.phone
