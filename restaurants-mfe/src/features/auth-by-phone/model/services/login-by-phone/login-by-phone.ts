import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions, type IUser } from 'entities/user'

interface Props {
    phone: string
}

export const loginByPhone = createAsyncThunk<IUser, Props>('auth/loginByPassword',
    async (data, thunkAPI) => {
        // TODO redo
        try {
            const res = await axios.post<IUser>('', data)
            thunkAPI.dispatch(userActions.setAuthData(res.data))
            return res.data
        } catch (e) {
            thunkAPI.dispatch(userActions.setAuthData({ phone: data.phone }))
            return thunkAPI.fulfillWithValue({ phone: data.phone })
        }
    })
