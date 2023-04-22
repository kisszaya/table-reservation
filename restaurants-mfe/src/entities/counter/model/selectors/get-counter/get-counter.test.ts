import { type DeepPartial } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/store'
import { getCounter } from './get-counter'

describe('getCounter selector', () => {
    test('should return counter value', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounter(state as IStateSchema)).toEqual({ value: 10 })
    })
})
