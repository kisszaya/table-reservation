import { type Responses } from 'kisszaya-table-reservation/lib/responses'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IPreviewTag } from 'kisszaya-table-reservation/lib/interfaces'

import { type IThunkConfig } from 'app/providers/store'
import { serverRoutes } from 'shared/api'

export const fetchTableTags =
    createAsyncThunk<IPreviewTag[], undefined, IThunkConfig<string>>('filters/fetchTableTags',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI
            try {
                const res = await extra.api.get<Responses.GetTags>(serverRoutes.tags)
                return res.data.tags
            } catch (e) {
                return rejectWithValue('error')
            }
        })
