import { createSlice } from '@reduxjs/toolkit'

import { reservesInitialState } from './initial-state'
import { cancelReserve, fetchReserves } from '..'

export const reservesSlice = createSlice({
    name: 'reservesSlice',
    initialState: reservesInitialState,
    reducers: {
        // setPhone: (state, action: PayloadAction<ILoginByPhoneSchema['phone']>) => {
        //     state.phone = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReserves.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
        builder.addCase(fetchReserves.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
        builder.addCase(fetchReserves.fulfilled, (state, action) => {
            state.isLoading = false
            state.reserves = action.payload.reserves
        })
        builder.addCase(cancelReserve.rejected, (state, action) => {
            state.error = action.payload as string
        })
        builder.addCase(cancelReserve.fulfilled, (state, action) => {
            const changedReserve = action.payload.reserve
            state.reserves = [
                ...state.reserves.filter(
                    reserve => reserve.reserve_id !== changedReserve.reserve_id
                ),
                changedReserve
            ]
        })
    }
})

export const { actions: reservesActions } = reservesSlice
export const { reducer: reservesReducer } = reservesSlice
