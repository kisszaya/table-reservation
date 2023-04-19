import { render, screen } from '@testing-library/react'

import { Button } from './button'
import { BUTTON_VARIANT } from '../const'

describe('button test', () => {
    test('should be in documents', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('button with variant should be in document', () => {
        render(<Button variant={BUTTON_VARIANT.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})
