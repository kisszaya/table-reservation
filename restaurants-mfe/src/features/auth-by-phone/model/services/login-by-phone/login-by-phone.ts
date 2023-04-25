import { createAsyncThunk } from '@reduxjs/toolkit'
import { userActions, type IUser } from 'entities/user'
import { type IThunkConfig } from 'app/providers/store'

interface Props {
    phone: string
}

export const loginByPhone =
    createAsyncThunk<IUser, Props, IThunkConfig<Error>>('auth/loginByPassword',
        async (data, thunkAPI) => {
            const { dispatch, fulfillWithValue, extra } = thunkAPI
            // TODO redo
            try {
                const res = await extra.api.post<IUser>('/', data)
                dispatch(userActions.setAuthData(res.data))
                return res.data
            } catch (e) {
                dispatch(userActions.setAuthData({ phone: data.phone }))
                return fulfillWithValue({ phone: data.phone })
            }
        })
