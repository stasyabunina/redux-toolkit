import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const item = action.payload;
            return [...state, item];
        },
        removeFavorite: (state, action) => {
            const imdbID = action.payload;
            return state.filter(item => item.imdbID !== imdbID);
        }
    },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;