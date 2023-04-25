import { type StoryFn } from '@storybook/react'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { createReduxStore, type IStateSchema } from 'app/providers/store'
import { loginByPhoneReducer } from 'features/auth-by-phone/model'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
    loginByPhone: loginByPhoneReducer
}

export const StoreDecorator = (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
) => (StoryComponent: StoryFn) => {
    const store = createReduxStore(
        state as IStateSchema,
        {
            ...defaultAsyncReducers as ReducersMapObject<IStateSchema>,
            ...asyncReducers as ReducersMapObject<IStateSchema>
        }
    )

    return (
        <Provider store={store}>
            <StoryComponent/>
        </Provider>
    )
}
