import { createAsyncThunk } from '@reduxjs/toolkit'

import { type IThunkConfig } from 'app/providers/store'
import { getMeInfo, selectMeAccessToken, updateTokens } from '../..'

export const initApp =
    createAsyncThunk<undefined, undefined, IThunkConfig<string>>(
        'me/initApp',
        async (_, thunkAPI) => {
            const { rejectWithValue, dispatch, getState } = thunkAPI
            try {
                console.log('update')
                await dispatch(updateTokens())

                const accessToken = selectMeAccessToken(getState())
                if (accessToken) {
                    await dispatch(getMeInfo())
                }
            } catch (e) {
                return rejectWithValue('error')
            }
        })
