import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { DynamicModuleLoader, type IReducersList } from 'shared/lib/ui'
import { useAppDispatch } from 'shared/lib/hooks'
import { Loader, Title } from 'shared/ui'

import styles from './reserves-list.module.scss'

import { ReserveCard } from '..'
import {
    fetchReserves,
    reservesReducer,
    selectReservesData,
    selectReservesIsLoading
} from '../../model'

const asyncReducers: IReducersList = {
    reserves: reservesReducer
}

export const ReservesList = () => {
    const dispatch = useAppDispatch()
    const reserves = useSelector(selectReservesData)
    const isLoading = useSelector(selectReservesIsLoading)

    useEffect(() => {
        dispatch(fetchReserves())
    }, [])

    return (
        <DynamicModuleLoader reducers={asyncReducers}>
            {
                isLoading && <Loader/>
            }
            {
                !isLoading && <div className={styles.reserves}>
                    <Title className={styles.title}>
                        Ваши брони
                    </Title>
                    {
                        reserves.map(reserve => (
                            <ReserveCard {...reserve} key={reserve.reserve_id}/>
                        ))
                    }
                </div>
            }

        </DynamicModuleLoader>
    )
}
