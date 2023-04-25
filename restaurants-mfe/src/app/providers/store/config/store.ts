import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'

import { type IStateSchema } from '../types'
import { createReducerManager } from '.'

export const createReduxStore = (
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>
) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}
