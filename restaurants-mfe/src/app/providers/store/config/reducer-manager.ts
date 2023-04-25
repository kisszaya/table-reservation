import {
    type AnyAction,
    combineReducers,
    type ReducersMapObject,
    type Reducer
} from '@reduxjs/toolkit'
import { type IReducerManagerReturnedType, type IStateSchema, type IStateSchemaKey } from '../types'

export function createReducerManager (
    initialReducers: ReducersMapObject<IStateSchema>
): IReducerManagerReturnedType {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: IStateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,
        reduce: (state: IStateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                keysToRemove.forEach((key) => {
                    delete state[key]
                })
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },

        add: (key: IStateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
        },

        remove: (key: IStateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }
            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        }
    }
}
