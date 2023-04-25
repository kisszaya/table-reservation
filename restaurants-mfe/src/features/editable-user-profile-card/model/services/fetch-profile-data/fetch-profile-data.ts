import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkConfig } from 'app/providers/store'
import { type IProfile } from 'entities/profile'

const fakeProfile: IProfile = {
    fullName: 'Svetlana Matveeva',
    email: 'sveta@mail.com',
    phone: '8943723643'
}

export const fetchProfileData =
    createAsyncThunk<IProfile, undefined, IThunkConfig<Error>>('profile/fetchProfileData',
        async (_, thunkAPI) => {
            const { fulfillWithValue, extra } = thunkAPI
            // TODO redo
            try {
                const res = await extra.api.get<IProfile>('/')
                return res.data
            } catch (e) {
                return fulfillWithValue(fakeProfile)
            }
        })
