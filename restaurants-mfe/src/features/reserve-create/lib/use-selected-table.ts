import { useSelector } from 'react-redux'
import { useMemo } from 'react'

import {
    selectCreateReserveFreeTables,
    selectCreateReserveTableId
} from 'features/reserve-create/model'

export const useSelectedTable = () => {
    const tables = useSelector(selectCreateReserveFreeTables)
    const table_id = useSelector(selectCreateReserveTableId)

    const table = useMemo(() => {
        const table = tables.find(table => table.table_id === table_id)
        if (!table) throw new Error('meow')

        return table
    }, [table_id, tables])

    return {
        table
    }
}
