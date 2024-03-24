import { createSlice } from '@reduxjs/toolkit';
import { getMovieDetail } from './getMovieDetail';

const initialState = {
    details: {},
    isLoading: false,
    error: null
};

export const movieDetailSlice = createSlice({
    name: 'movieDetail',
    initialState,
    reducers: {
        //...
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovieDetail.pending, (state) => {
                state.isLoading = true;
                state.movie = {};
                state.error = null;
            })
            .addCase(getMovieDetail.fulfilled, (state, action) => {
                state.isLoading = false;

                if (action.payload.Error) {
                    state.error = action.payload.Error;
                } else {
                    const details = action.payload;
                    state.details = details;
                }

            })
            .addCase(getMovieDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            });
    }
})

export default movieDetailSlice.reducer;