import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../features/movieDetail/getMovieDetail';
import MovieDetail from '../features/movieDetail/MovieDetail';
import { Loading } from 'react-daisyui';

function MoviePage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const movie = useSelector(state => state.movieDetail);

    useEffect(() => {
        dispatch(getMovieDetail(id))
    }, [dispatch, id]);

    return (
        <>
            {movie.isLoading ? <div className='p-20 w-full flex justify-center'><Loading /></div> : <MovieDetail item={movie.details} />}
        </>
    );
}

export default MoviePage;