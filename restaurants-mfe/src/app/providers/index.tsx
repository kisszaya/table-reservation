import compose from 'compose-function'
import { withErrorBoundary } from './error-boundary'
import { withBrowserProvider } from './routing'
import { withThemeProvider } from './theme'
import { withReduxStore } from './store'
import { withModal } from './modal'

export const withProviders = compose(
    withBrowserProvider,
    withThemeProvider,
    withErrorBoundary,
    withReduxStore,
    withModal
)
