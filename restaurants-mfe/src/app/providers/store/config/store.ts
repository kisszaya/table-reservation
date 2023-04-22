import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/counter'

import { type IStateSchema } from '../types'

export const createReduxStore = (initialState?: IStateSchema) => {
    const rootReducers = combineReducers<IStateSchema>({
        counter: counterReducer
    })

    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
