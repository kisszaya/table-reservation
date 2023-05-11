import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { $api } from 'shared/api'
import { meInitialState } from './initial-state'
import { getMeInfo, initApp, logout, updateTokens } from '../services'

export const meSlice = createSlice({
    name: 'me',
    initialState: meInitialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload
            $api.defaults.headers.Authorization = `Bearer ${action.payload}`
        }
    },
    extraReducers: (builder) => {
        // get info
        builder.addCase(getMeInfo.rejected, (state, action) => {
            state.error = action.payload as string
        })
        builder.addCase(getMeInfo.fulfilled, (state, action) => {
            state.me = { ...action.payload, phone: action.payload.phone ?? '' }
        })

        // logout
        builder.addCase(logout.rejected, (state, action) => {
            state.error = action.payload as string
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.accessToken = null
            state.me = null
            $api.defaults.headers.common.Authorization = undefined
        })

        // update tokens
        builder.addCase(updateTokens.rejected, (state, action) => {
            state.accessToken = null
            state.me = null
        })
        builder.addCase(updateTokens.fulfilled, (state, action) => {
            const accessToken = action.payload.accessToken
            state.accessToken = accessToken
            $api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
        })

        // init app
        builder.addCase(initApp.rejected, (state, action) => {
            state.error = action.payload as string
            state.isLoading = false
        })
        builder.addCase(initApp.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(initApp.fulfilled, (state, action) => {
            state.isLoading = false
        })
    }
})

export const { actions: meActions } = meSlice
export const { reducer: meReducer } = meSlice
