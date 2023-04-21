import compose from 'compose-function'

import { withErrorBoundary } from './error-boundary'
import { withBrowserProvider } from './routing'
import { withThemeProvider } from './theme'

export const withProviders = compose(withBrowserProvider, withThemeProvider, withErrorBoundary)
