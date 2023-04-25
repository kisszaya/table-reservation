import { loginByPhoneReducer, loginByPhoneActions } from './login-by-phone-slice'
import { type ILoginByPhoneSchema } from '..'

describe('loginByPhone slice', () => {
    test('test setPhone', () => {
        const phone = '123'

        const state: DeepPartial<ILoginByPhoneSchema> = {
            phone: ''
        }
        expect(
            loginByPhoneReducer(state as ILoginByPhoneSchema, loginByPhoneActions.setPhone(phone))
        ).toEqual({ phone })
    })
})
