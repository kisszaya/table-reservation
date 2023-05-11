import {
    type CombinedState,
    configureStore,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type NavigateFunction } from 'react-router-dom'

import { counterReducer } from 'entities/counter'
import { meReducer } from 'entities/me'
import { $api } from 'shared/api'

import { type IStateSchema } from '../types'
import { createReducerManager } from '.'

type IAsyncReducers = ReducersMapObject<IStateSchema>

type Props = {
    initialState?: IStateSchema
    asyncReducers?: IAsyncReducers
    navigate?: NavigateFunction
} | undefined

export const createReduxStore = (
    props: Props = {}
) => {
    const { navigate, initialState, asyncReducers } = props

    const rootReducers: IAsyncReducers = {
        ...asyncReducers,
        counter: counterReducer,
        me: meReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            },
            immutableCheck: true,
            serializableCheck: true
        })
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}
