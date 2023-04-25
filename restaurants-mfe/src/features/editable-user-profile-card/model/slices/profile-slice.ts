import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type IProfile } from 'entities/profile'
import { userProfileInitialState } from './initial-state'
import { fetchProfileData, type IUserProfileSchema, updateProfileData } from '..'

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: userProfileInitialState,
    reducers: {
        cancelEdit: (state) => {
            state.editable = false
            state.form = state.data
        },
        startEdit: (state) => {
            state.editable = true
        },
        updateProfileData: (
            state,
            action: PayloadAction<Partial<IUserProfileSchema['form']>>) => {
            state.form = { ...state.form, ...action.payload }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.data = action.payload
                state.form = action.payload
                state.isLoading = false
            })
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.data = action.payload
                state.form = action.payload
                state.editable = false
                state.isLoading = false
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
    }
})

export const { actions: userProfileActions } = userProfileSlice
export const { reducer: userProfileReducer } = userProfileSlice
