import { useSelector } from 'react-redux'

import { useAppDispatch } from 'shared/lib/hooks'
import { Loader } from 'shared/ui'

import styles from './select-tables.module.scss'

import {
    createReserveActions,
    selectCreateReserveFreeTables,
    selectCreateReserveIsLoading, selectCreateReserveTableId
} from '../../../model'
import { TableCard } from '../../index'

export const SelectTables = () => {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(selectCreateReserveIsLoading)
    const tables = useSelector(selectCreateReserveFreeTables)
    const selectedTableId = useSelector(selectCreateReserveTableId)

    if (isLoading) {
        return <Loader/>
    }

    const onSelectTable = (table_id: number) => {
        dispatch(createReserveActions.setTableId(table_id))
    }

    return <div className={styles.container}>
        {
            tables.map(table => (
                <TableCard
                    key={table.table_id}
                    onClick={() => { onSelectTable(table.table_id as number) }}
                    selected={table.table_id === selectedTableId}
                    {...table}
                />
            ))
        }
    </div>
}
