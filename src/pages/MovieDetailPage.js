import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../features/movieDetail/getMovieDetail';
import MovieDetail from '../features/movieDetail/MovieDetail';
import Loader from '../components/Loader';


function MoviePage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movie = useSelector(state => state.movieDetail);

    useEffect(() => {
        dispatch(getMovieDetail(id))
    }, [dispatch, id]);

    return (
        <>
            {movie.isLoading ? <Loader /> : <MovieDetail item={movie.details} />}
        </>
    );
}

export default MoviePage;