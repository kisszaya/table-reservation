import { type ILoginByPhoneSchema } from 'features/auth-by-phone'

export const loginByPhoneInitialState: ILoginByPhoneSchema = {
    error: null,
    phone: '',
    isLoading: false
}
