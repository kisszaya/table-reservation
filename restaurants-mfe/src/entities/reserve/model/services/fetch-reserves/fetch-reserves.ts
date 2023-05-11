import { type AxiosResponse } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Responses } from 'kisszaya-table-reservation/lib/responses'

import { type IThunkConfig } from 'app/providers/store'
import { serverRoutes } from 'shared/api'

export const fetchReserves =
    createAsyncThunk<Responses.GetVisitorReserves, undefined, IThunkConfig<string>>(
        'reserves/fetchReserves',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI

            try {
                const res =
                    await extra.api.get<
                        Responses.GetVisitorReserves,
                        AxiosResponse<Responses.GetVisitorReserves>
                    >(
                        serverRoutes.reserves,
                        {
                            withCredentials: true
                        }
                    )
                return res.data
            } catch (e) {
                return rejectWithValue('error')
            }
        })
