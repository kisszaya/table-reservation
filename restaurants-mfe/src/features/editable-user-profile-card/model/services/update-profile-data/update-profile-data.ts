import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkConfig } from 'app/providers/store'
import { type IProfile } from 'entities/profile'
import { type VALIDATION_ERROR } from 'shared/const'
import { selectProfileFormData, validateProfileData } from '../..'

export const updateProfileData =
    createAsyncThunk<IProfile, undefined, IThunkConfig<VALIDATION_ERROR[]>>(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const { fulfillWithValue, extra, getState, rejectWithValue } = thunkAPI

            const formData = selectProfileFormData(getState())
            const errors = validateProfileData(formData)
            if (errors) {
                return rejectWithValue(errors)
            }

            // TODO redo
            try {
                const res = await extra.api.post<IProfile>('/', formData)
                return res.data
            } catch (e) {
                return fulfillWithValue(formData)
            }
        })
