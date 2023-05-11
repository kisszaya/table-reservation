import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { loginByPhoneInitialState } from './initial-state'
import { type ILoginByPhoneSchema } from '../types'
import { loginByPhone } from '../services'

export const loginByPhoneSlice = createSlice({
    name: 'loginByPhone',
    initialState: loginByPhoneInitialState,
    reducers: {
        setPhone: (state, action: PayloadAction<ILoginByPhoneSchema['phone']>) => {
            state.phone = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByPhone.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
        builder.addCase(loginByPhone.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
        builder.addCase(loginByPhone.fulfilled, (state, action) => {
            state.isLoading = false
        })
    }
})

export const { actions: loginByPhoneActions } = loginByPhoneSlice
export const { reducer: loginByPhoneReducer } = loginByPhoneSlice
