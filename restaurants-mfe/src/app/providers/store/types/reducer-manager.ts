import { type IStateSchema } from 'app/providers/store'
import {
    type AnyAction,
    type CombinedState,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type IStateSchemaKey } from 'app/providers/store/types/state-schema'

export interface IReducerManagerReturnedType {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
    add: (key: IStateSchemaKey, reducer: Reducer) => void
    remove: (key: IStateSchemaKey) => void
}
