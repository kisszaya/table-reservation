import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Responses } from 'kisszaya-table-reservation/lib/responses'
import { type Requests } from 'kisszaya-table-reservation/lib/requests'
import { RESERVE_SOURCE } from 'kisszaya-table-reservation/lib/interfaces'

import { type IThunkConfig } from 'app/providers/store'
import { serverRoutes } from 'shared/api'
import { selectRestaurantId } from 'entities/restaurants'

import { isAllFieldsNonNullable } from 'shared/lib'
import { getMeInfo, meActions } from 'entities/me'
import { selectCreateReserveData } from '../..'

export const createReserve = createAsyncThunk<
    undefined,
    undefined,
    IThunkConfig<string>
>('reserve/create', async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState, dispatch } = thunkAPI
    try {
        const {
            error,
            isLoading,
            freeTables,
            ...restaurantData
        } = selectCreateReserveData(getState())
        const {
            month,
            phone,
            email,
            persons_count,
            last_name,
            first_name,
            table_id, day, hours, minutes
        } = isAllFieldsNonNullable(restaurantData)

        const restaurant_id = selectRestaurantId(getState())

        const time = (hours * 60) + minutes

        const reserve: Requests.CreateReserve = {
            day,
            time,
            month,
            phone,
            email,
            persons_count,
            source: RESERVE_SOURCE.TELEGRAM,
            first_name,
            last_name,
            table_id
        }

        const { data: { accessToken } } = await extra.api.post<Responses.CreateReserve>(
            serverRoutes.restaurantReserves(restaurant_id), reserve
        )

        dispatch(meActions.setAccessToken(accessToken))
        await dispatch(getMeInfo())
    } catch (e) {
        return rejectWithValue('error')
    }
})
