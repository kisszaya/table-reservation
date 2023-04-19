import { sum } from './sum'

describe('sum test', () => {
    test('should plus', () => {
        expect(sum(2, 4)).toBe(6)
    })
})
