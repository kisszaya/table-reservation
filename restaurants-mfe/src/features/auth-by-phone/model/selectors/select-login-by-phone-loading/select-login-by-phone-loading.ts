import { type IStateSchema } from 'app/providers/store'
import { loginByPhoneInitialState } from '../../slices'

export const selectLoginByPhoneLoading = (state: IStateSchema) =>
    state?.loginByPhone?.isLoading ||
    loginByPhoneInitialState.isLoading
