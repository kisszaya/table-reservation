import { type IStateSchema } from 'app/providers/store'

import { selectLoginByPhonePhone } from './select-login-by-phone-phone'

describe('selectLoginByPhonePhone selector', () => {
    test('should return phone value', () => {
        const phone = '123'

        const state: DeepPartial<IStateSchema> = {
            loginByPhone: { phone }
        }
        expect(selectLoginByPhonePhone(state as IStateSchema)).toEqual(phone)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}

        expect(selectLoginByPhonePhone(state as IStateSchema)).toEqual('')
    })
})
