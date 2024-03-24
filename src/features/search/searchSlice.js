import { createSlice } from '@reduxjs/toolkit';
import { getMovies } from './getMovies';

const initialState = {
    searchList: [],
    totalResults: '',
    isLoading: false,
    error: null
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        //...
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true;
                state.totalResults = '';
                state.searchList = [];
                state.error = null;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.isLoading = false;

                if (action.payload.Error) {
                    state.error = action.payload.Error;
                } else {
                    const { Search, totalResults } = action.payload;
                    state.searchList = Search;
                    state.totalResults = totalResults;
                }

            })
            .addCase(getMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            });
    }
});

export default searchSlice.reducer;