import { type EnhancedStore } from '@reduxjs/toolkit'

import { type IReducerManagerReturnedType, type IStateSchema } from '.'

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManagerReturnedType
}
