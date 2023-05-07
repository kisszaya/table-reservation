import { createSlice } from '@reduxjs/toolkit'

import { restaurantInitialState } from './restaurant-initial-state'
import { fetchRestaurantById } from '..'

export const restaurantSlice = createSlice({
    name: 'restaurantSlice',
    initialState: restaurantInitialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurantById.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
        builder.addCase(fetchRestaurantById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
        builder.addCase(fetchRestaurantById.fulfilled, (state, action) => {
            state.isLoading = false
            console.log('restaurant', action.payload.restaurant)
            state.restaurant = action.payload.restaurant
        })
    }
})

export const { actions: restaurantActions } = restaurantSlice
export const { reducer: restaurantReducer } = restaurantSlice
