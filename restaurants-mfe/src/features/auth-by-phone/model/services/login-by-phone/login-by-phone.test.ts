import axios from 'axios'

import { userActions } from 'entities/user'
import { TestAsyncThunk } from 'shared/lib/tests'
import { loginByPhone } from './login-by-phone'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, { shallow: false })

describe('loginByPhone async thunk test', () => {
    test('success result', async () => {
        const userData = { phone: '123' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))

        const thunk = new TestAsyncThunk(loginByPhone)
        const result = await thunk.callThunk(userData)

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toBe(userData)
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    })

    test('error result', async () => {
        const userData = { phone: '123' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByPhone)
        const result = await thunk.callThunk(userData)

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    })
})
