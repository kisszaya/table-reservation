import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Responses } from 'kisszaya-table-reservation/lib/responses'

import { type IThunkConfig } from 'app/providers/store'
import { serverRoutes } from 'shared/api'

export const fetchRestaurants =
    createAsyncThunk<
        Responses.GetAggregatorRestaurantPreviews,
        undefined,
        IThunkConfig<string>>('restaurants/get-all',
            async (_, thunkAPI) => {
                const { extra, rejectWithValue } = thunkAPI
                try {
                    const res = await extra.api.get<Responses.GetAggregatorRestaurantPreviews>(
                        serverRoutes.restaurants
                    )
                    return res.data
                } catch (e) {
                    return rejectWithValue('error')
                }
            })
