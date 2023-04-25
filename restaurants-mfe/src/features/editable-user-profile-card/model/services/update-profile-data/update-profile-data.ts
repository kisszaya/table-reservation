import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkConfig } from 'app/providers/store'
import { type IProfile } from 'entities/profile'
import { selectProfileFormData } from '../..'

export const updateProfileData =
    createAsyncThunk<IProfile, undefined, IThunkConfig<Error>>('profile/updateProfileData',
        async (_, thunkAPI) => {
            const { fulfillWithValue, extra, getState } = thunkAPI
            const formData = selectProfileFormData(getState())

            // TODO redo
            try {
                const res = await extra.api.post<IProfile>('/', formData)
                return res.data
            } catch (e) {
                return fulfillWithValue(formData)
            }
        })
