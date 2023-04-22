import { counterReducer, counterActions } from './counter-slice'
import { type ICounterSchema } from '../types'

describe('counter slice', () => {
    test('increment action', () => {
        const state: ICounterSchema = {
            value: 10
        }
        expect(
            counterReducer(state, counterActions.increment())
        ).toEqual({ value: 11 })
    })

    test('decrement action', () => {
        const state: ICounterSchema = {
            value: 10
        }
        expect(
            counterReducer(state, counterActions.decrement())
        ).toEqual({ value: 9 })
    })

    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment())
        ).toEqual({ value: 1 })
    })
})
