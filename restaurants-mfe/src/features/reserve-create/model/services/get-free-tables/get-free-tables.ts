import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/store'
import {
    selectCreateReserveDay,
    selectCreateReserveHours,
    selectCreateReserveMinutes,
    selectCreateReserveMonth
} from 'features/reserve-create/model'
import { serverRoutes } from 'shared/api'
import { selectRestaurantId } from 'entities/restaurants'
import { type Responses } from 'kisszaya-table-reservation/lib/responses'

export const getFreeTables = createAsyncThunk<
    Responses.GetFreeRestaurantTables,
  undefined,
  IThunkConfig<string>
>('reserve/getFreeTables', async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI
    try {
        const month = selectCreateReserveMonth(getState())
        const restaurant_id = selectRestaurantId(getState())
        const day = selectCreateReserveDay(getState())
        const hours = selectCreateReserveHours(getState())
        const minutes = selectCreateReserveMinutes(getState())

        if (!month || !day || !hours || !minutes) {
            throw new Error('error')
        }

        const res = await extra.api.get<Responses.GetFreeRestaurantTables>(
            serverRoutes.freeTables({
                month,
                day,
                time: hours * 60 + minutes,
                restaurant_id
            })
        )

        console.log('test res', res.data)
        return res.data
    } catch (e) {
        return rejectWithValue('error')
    }
})
