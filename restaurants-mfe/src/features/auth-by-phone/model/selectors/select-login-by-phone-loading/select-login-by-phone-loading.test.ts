import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/store'

import { selectLoginByPhoneLoading } from './select-login-by-phone-loading'

describe('selectLoginByPhoneLoading selector', () => {
    test('should return isLoading value', () => {
        const isLoading = true

        const state: DeepPartial<IStateSchema> = {
            loginByPhone: { isLoading }
        }
        expect(selectLoginByPhoneLoading(state as IStateSchema)).toEqual(isLoading)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}

        expect(selectLoginByPhoneLoading(state as IStateSchema)).toEqual(false)
    })
})
