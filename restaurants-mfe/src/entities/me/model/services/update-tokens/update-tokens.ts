import { type Responses } from 'kisszaya-table-reservation/lib/responses'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkConfig } from 'app/providers/store'
import { serverRoutes } from 'shared/api'
import { generateFingerprint } from 'shared/lib'

export const updateTokens =
    createAsyncThunk<Responses.UpdateRefreshToken, undefined, IThunkConfig<string>>(
        'me/updateTokens',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI
            try {
                const fingerprint = await generateFingerprint()

                const res = await extra.api.post<Responses.UpdateRefreshToken>(
                    serverRoutes.refresh,
                    {
                        fingerprint
                    },
                    {
                        withCredentials: true
                    })

                return res.data
            } catch (e) {
                return rejectWithValue('error')
            }
        })
