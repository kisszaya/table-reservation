import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { createReserveInitialState } from './initial-state'
import { type ICreateReserveSchema } from '../types'

export const createReserveSlice = createSlice({
    name: 'createReserve',
    initialState: createReserveInitialState,
    reducers: {
        setPhone: (state, action: PayloadAction<ICreateReserveSchema['phone']>) => {
            state.phone = action.payload
        },
        setDay: (state, action: PayloadAction<ICreateReserveSchema['day']>) => {
            state.day = action.payload
        },
        setEmail: (state, action: PayloadAction<ICreateReserveSchema['email']>) => {
            state.email = action.payload
        },
        setFirstName: (state, action: PayloadAction<ICreateReserveSchema['first_name']>) => {
            state.first_name = action.payload
        },
        setLastName: (state, action: PayloadAction<ICreateReserveSchema['last_name']>) => {
            state.last_name = action.payload
        },
        setMonth: (state, action: PayloadAction<ICreateReserveSchema['month']>) => {
            state.month = action.payload
        },
        setPersonsCount: (state, action: PayloadAction<ICreateReserveSchema['persons_count']>) => {
            state.persons_count = action.payload
        },
        setTableId: (state, action: PayloadAction<ICreateReserveSchema['table_id']>) => {
            state.table_id = action.payload
        },
        setHours: (state, action: PayloadAction<ICreateReserveSchema['hours']>) => {
            state.hours = action.payload
        },
        setMinutes: (state, action: PayloadAction<ICreateReserveSchema['minutes']>) => {
            state.minutes = action.payload
        }
    }
    // extraReducers: (builder) => {
    //     builder.addCase(getFreeTables.pending, (state) => {
    //         state.error = null
    //         state.isLoading = true
    //     })
    //     builder.addCase(getFreeTables.rejected, (state, action) => {
    //         state.isLoading = false
    //         state.error = action.payload as Error
    //     })
    //     builder.addCase(getFreeTables.fulfilled, (state, action) => {
    //         state.isLoading = false
    //     })
    // }
})

export const { actions: createReserveActions } = createReserveSlice
export const { reducer: createReserveReducer } = createReserveSlice
