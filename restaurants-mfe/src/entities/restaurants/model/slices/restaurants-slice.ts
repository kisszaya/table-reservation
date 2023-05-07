import { createSlice } from '@reduxjs/toolkit'

import { fetchRestaurants } from 'entities/restaurants/model'
import { restaurantsInitialState } from './restaurants-initial-state'

export const restaurantsSlice = createSlice({
    name: 'restaurantsSlice',
    initialState: restaurantsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurants.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
        builder.addCase(fetchRestaurants.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
        builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.isLoading = false
            state.restaurantPreviews = action.payload.restaurants
        })
    }
})

export const { actions: restaurantsActions } = restaurantsSlice
export const { reducer: restaurantsReducer } = restaurantsSlice
