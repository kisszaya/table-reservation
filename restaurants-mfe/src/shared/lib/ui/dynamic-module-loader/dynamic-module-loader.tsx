import { type FC, type PropsWithChildren, useEffect } from 'react'
import { type Reducer } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'

import { type IReduxStoreWithManager, type IStateSchemaKey } from 'app/providers/store'
import { type IReducersList } from 'shared/lib/ui'

type TupleReducersListItem = [string, Reducer]

interface Props {
    reducers: IReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<PropsWithChildren<Props>> = (props) => {
    const { reducers, children, removeAfterUnmount = true } = props
    const store = useStore() as IReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: TupleReducersListItem) => {
            store.reducerManager.add(key as IStateSchemaKey, reducer)
            dispatch({ type: `@INIT ${key} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((key: TupleReducersListItem[0]) => {
                    store.reducerManager.remove(key as IStateSchemaKey)
                    dispatch({ type: `@DESTROY ${key} reducer` })
                })
            }
        }
    }, [])

    return <>
        {children}
    </>
}
