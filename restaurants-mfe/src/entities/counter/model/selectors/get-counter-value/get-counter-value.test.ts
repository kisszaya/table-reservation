import { type IStateSchema } from 'app/providers/store'
import { getCounterValue } from '..'

describe('getCounterValue selector', () => {
    test('should return counter value', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as IStateSchema)).toEqual(10)
    })
})
