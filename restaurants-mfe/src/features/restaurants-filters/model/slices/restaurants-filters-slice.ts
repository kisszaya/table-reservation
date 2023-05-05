import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { restaurantsFiltersInitialState } from './initial-state'
import { type IRestaurantsFiltersSchema, fetchTableTags } from '..'

export const restaurantsFiltersSlice = createSlice({
    name: 'restaurantsFilter',
    initialState: restaurantsFiltersInitialState,
    reducers: {
        setWorkingTimeStatus: (
            state, action: PayloadAction<IRestaurantsFiltersSchema['workingTimeStatus']>
        ) => {
            state.workingTimeStatus = action.payload
        },
        setSearchText: (
            state, action: PayloadAction<IRestaurantsFiltersSchema['searchText']>
        ) => {
            state.searchText = action.payload
        },
        setTags: (
            state, action: PayloadAction<string>
        ) => {
            const tag = action.payload
            if (state.selectedTags.includes(tag)) {
                state.selectedTags = state.selectedTags.filter(t => t !== tag)
            } else {
                state.selectedTags = [...state.selectedTags, tag]
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTableTags.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
        builder.addCase(fetchTableTags.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string
        })
        builder.addCase(fetchTableTags.fulfilled, (state, action) => {
            state.isLoading = false
            state.tags = action.payload
        })
    }
})

export const { actions: restaurantsFiltersActions } = restaurantsFiltersSlice
export const { reducer: restaurantsFiltersReducer } = restaurantsFiltersSlice
