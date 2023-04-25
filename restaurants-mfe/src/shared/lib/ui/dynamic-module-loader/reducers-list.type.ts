import { type IStateSchemaKey } from 'app/providers/store/types'
import { type Reducer } from '@reduxjs/toolkit'

export type IReducersList = {
    [key in IStateSchemaKey]?: Reducer
}
