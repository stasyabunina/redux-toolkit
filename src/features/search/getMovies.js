import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMovies = createAsyncThunk('movies/getMovies', async (value) => {
    const response = await axios.get(`${process.env.REACT_APP_URL}s=${value}`);
    return response.data;
});