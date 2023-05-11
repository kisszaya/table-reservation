
import { TestAsyncThunk } from 'shared/lib/tests'
import { loginByPhone } from './login-by-phone'

describe('getFreeTables async thunk test', () => {
    test('success result', async () => {
        const userData = { phone: '123' }

        const thunk = new TestAsyncThunk(loginByPhone)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }))
        const result = await thunk.callThunk(userData)

        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toBe(userData)
        // expect(thunk.dispatch).toHaveBeenCalledWith(meActions.setAuthData(userData))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    })

    test('error result', async () => {
        const userData = { phone: '123' }

        const thunk = new TestAsyncThunk(loginByPhone)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk(userData)

        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    })
})
