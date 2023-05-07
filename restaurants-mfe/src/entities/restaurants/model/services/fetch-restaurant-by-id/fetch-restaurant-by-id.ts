import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Responses } from 'kisszaya-table-reservation/lib/responses'

import { type IThunkConfig } from 'app/providers/store'
import { serverRoutes } from 'shared/api'

export const fetchRestaurantById =
    createAsyncThunk<
        Responses.GetAggregatorRestaurant,
        { restaurant_id: number | string },
        IThunkConfig<string>>('restaurants/get-by-id',
            async (data, thunkAPI) => {
                const { extra, rejectWithValue } = thunkAPI
                try {
                    const res = await extra.api.get<Responses.GetAggregatorRestaurant>(
                        serverRoutes.restaurant(data.restaurant_id)
                    )
                    console.log('res', res)
                    return res.data
                } catch (e) {
                    return rejectWithValue('error')
                }
            })
