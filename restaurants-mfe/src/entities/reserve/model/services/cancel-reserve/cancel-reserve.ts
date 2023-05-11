import { type AxiosResponse } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Responses } from 'kisszaya-table-reservation/lib/responses'
import { RESERVE_STATUS } from 'kisszaya-table-reservation/lib/interfaces'
import { type Requests } from 'kisszaya-table-reservation/lib/requests'

import { type IThunkConfig } from 'app/providers/store'
import { serverRoutes } from 'shared/api'

interface Props {
    reserve_id: number | string
}

export const cancelReserve =
    createAsyncThunk<Responses.ChangeReserveVisitorStatus, Props, IThunkConfig<string>>(
        'reserves/cancelReserve',
        async (data, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI

            try {
                const res =
                    await extra.api.patch<
                        Responses.ChangeReserveVisitorStatus,
                        AxiosResponse<Responses.ChangeReserveVisitorStatus>,
                        Requests.ChangeReserveVisitorStatus
                    >(
                        serverRoutes.reserve(data.reserve_id),
                        {
                            status: RESERVE_STATUS.CANCELED
                        }
                    )
                return res.data
            } catch (e) {
                return rejectWithValue('error')
            }
        })
