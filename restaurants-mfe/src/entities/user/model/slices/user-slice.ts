import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { clearInLocalStorage, getFromLocalStorage, setInLocalStorage } from 'shared/lib'
import { LOCAL_STORAGE_USER_KEY } from 'shared/const'

import { type IUser } from '../..'
import { type IUserSchema } from '..'

const initialState: IUserSchema = {
    authData: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            setInLocalStorage(LOCAL_STORAGE_USER_KEY, action.payload)
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = getFromLocalStorage<IUser>(LOCAL_STORAGE_USER_KEY)
            if (user) {
                state.authData = user
            }
        },
        logout: (state) => {
            clearInLocalStorage(LOCAL_STORAGE_USER_KEY)
            state.authData = null
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
