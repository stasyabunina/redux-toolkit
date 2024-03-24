import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../features/search/searchSlice';
import favoriteSlice from '../features/favorites/favoriteSlice';
import movieDetailSlice from '../features/movieDetail/movieDetailSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    favorites: favoriteSlice,
    movieDetail: movieDetailSlice,
  },
});