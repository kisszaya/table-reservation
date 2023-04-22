import { screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'

import { testComponentRender } from 'shared/lib/tests'
import { act } from 'react-dom/test-utils'
import { Counter } from './counter'

const initialState = {
    counter: {
        value: 10
    }
}

describe('counter component', () => {
    test('should have state value', () => {
        testComponentRender(<Counter/>, {
            initialState
        })

        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    test('should increment', async () => {
        testComponentRender(<Counter/>, {
            initialState
        })
        await act(async () => {
            userEvent.click(screen.getByTestId('increment-btn'))
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })

    test('should decrement', async () => {
        testComponentRender(<Counter/>, {
            initialState
        })
        await act(async () => {
            userEvent.click(screen.getByTestId('decrement-btn'))
        })

        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})
