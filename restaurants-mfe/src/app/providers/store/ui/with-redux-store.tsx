import { type ReactNode } from 'react'
import { Provider } from 'react-redux'

import { createReduxStore } from '../config'

export const withReduxStore = (component: () => ReactNode) => () => {
    const store = createReduxStore()

    return (
        <Provider store={store}>
            {component()}
        </Provider>
    )
}
