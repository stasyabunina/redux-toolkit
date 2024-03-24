import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-daisyui';
import { addFavorite, removeFavorite } from '../favorites/favoriteSlice';

function MovieDetail({ item }) {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(item.imdbID));
            setIsFavorite(false);
        } else {
            dispatch(addFavorite(item));
            setIsFavorite(true);
        }
    }

    useEffect(() => {
        if (favorites.find(favoriteItem => favoriteItem.imdbID === item.imdbID)) {
            setIsFavorite(true);
        }
    }, [favorites, item.imdbID]);

    return (
        <Card side='lg' className='bg-neutral'>
            <Card.Image src={item.Poster} alt={item.Title} />
            <Card.Body className='flex flex-col justify-between items-start'>
                <div className='flex flex-col justify-between mb-10 h-full'>
                    <Card.Title tag='h2'>{item.Title}</Card.Title>
                    <span>{item.Year}</span>
                    <span>{item.Genre}</span>
                    <span>{item.Runtime}</span>
                    <span>{item.Director}</span>
                    <span>{item.Actors}</span>
                    <span>{item.imdbRating}</span>
                </div>
                <Button className='text-lg' type='button' onClick={onClick}>{isFavorite ? '♥' : '♡'}</Button>
            </Card.Body>
        </Card>
    );
}

export default MovieDetail;