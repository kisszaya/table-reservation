import { type Responses } from 'kisszaya-table-reservation/lib/responses'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkConfig } from 'app/providers/store'
import { serverRoutes } from 'shared/api'

export const getMeInfo =
    createAsyncThunk<Responses.GetMeInfo, undefined, IThunkConfig<string>>('me/getInfo',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI
            try {
                const res =
                    await extra.api.get<Responses.GetMeInfo>(
                        serverRoutes.me, {
                            withCredentials: true
                        }
                    )
                return res.data
            } catch (e) {
                return rejectWithValue('error')
            }
        })
