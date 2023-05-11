import { type Responses } from 'kisszaya-table-reservation/lib/responses'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkConfig } from 'app/providers/store'
import { serverRoutes } from 'shared/api'

export const logout =
    createAsyncThunk<undefined, undefined, IThunkConfig<string>>('me/logout',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI
            try {
                const res = await extra.api.post<Responses.UserLogout>(
                    serverRoutes.logout,
                    {},
                    {
                        withCredentials: true
                    })
                if (res.data.status !== 'success') {
                    return rejectWithValue('error')
                }
            } catch (e) {
                return rejectWithValue('error')
            }
        })
