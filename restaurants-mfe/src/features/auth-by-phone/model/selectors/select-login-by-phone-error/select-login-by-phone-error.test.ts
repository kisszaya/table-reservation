import { type IStateSchema } from 'app/providers/store'

import { selectLoginByPhoneError } from './select-login-by-phone-error'

describe('selectLoginByPhoneError selector', () => {
    test('should return error value', () => {
        const error = new Error('error')

        const state: DeepPartial<IStateSchema> = {
            loginByPhone: { error }
        }
        expect(selectLoginByPhoneError(state as IStateSchema)).toEqual(error)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}

        expect(selectLoginByPhoneError(state as IStateSchema)).toEqual(null)
    })
})
