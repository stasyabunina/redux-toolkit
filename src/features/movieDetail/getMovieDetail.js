import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMovieDetail = createAsyncThunk('movies/getMovieDetail', async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_URL}i=${id}`);
    return response.data;
});