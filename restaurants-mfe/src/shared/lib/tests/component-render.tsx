import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { type DeepPartial } from '@reduxjs/toolkit'
import { Provider as StoreProvider } from 'react-redux'

import { createReduxStore, type IStateSchema } from 'app/providers/store'
import { i18nForTests } from 'shared/config'

export interface IComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<IStateSchema>
}

export const testComponentRender = (
    component: ReactNode, options: IComponentRenderOptions = {}
) => {
    const {
        route = '/', initialState
    } = options

    const store = createReduxStore({
        initialState: initialState as IStateSchema
    })

    return render(
        <StoreProvider store={store}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
