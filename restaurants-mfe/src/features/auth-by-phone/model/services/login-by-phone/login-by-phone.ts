import { type AxiosResponse } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Responses } from 'kisszaya-table-reservation/lib/responses'
import { type Requests } from 'kisszaya-table-reservation/lib/requests'

import { type IThunkConfig } from 'app/providers/store'
import { serverRoutes } from 'shared/api'
import { generateFingerprint } from 'shared/lib'
import { getMeInfo, meActions } from 'entities/me'

interface Props {
    phone: string
}

export const loginByPhone =
    createAsyncThunk<Responses.VisitorLogin, Props, IThunkConfig<string>>(
        'auth/fetchReserves',
        async (data, thunkAPI) => {
            const { dispatch, extra, rejectWithValue } = thunkAPI

            const fingerprint = await generateFingerprint()

            try {
                const res =
                    await extra.api.post<
                        Responses.VisitorLogin,
                        AxiosResponse<Responses.VisitorLogin>,
                        Requests.VisitorLogin
                    >(
                        serverRoutes.login, {
                            phone: data.phone,
                            fingerprint
                        },
                        {
                            withCredentials: true
                        }
                    )
                dispatch(meActions.setAccessToken(res.data.accessToken))
                await dispatch(getMeInfo())
                return res.data
            } catch (e) {
                return rejectWithValue('error')
            }
        })
