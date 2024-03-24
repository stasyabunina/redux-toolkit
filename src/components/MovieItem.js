import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favorites/favoriteSlice';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-daisyui';

function MovieItem({ item, isSearch }) {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClick = () => {
        if (isSearch) {
            if (isFavorite) {
                dispatch(removeFavorite(item.imdbID));
                setIsFavorite(false);
            } else {
                dispatch(addFavorite(item));
                setIsFavorite(true);
            }
        } else {
            setIsFavorite(false);
            dispatch(removeFavorite(item.imdbID));
        }
    }

    useEffect(() => {
        if (favorites.find(favoriteItem => favoriteItem.imdbID === item.imdbID)) {
            setIsFavorite(true);
        }
    }, [favorites, item.imdbID]);

    return (
        <li className='mr-[25px] mb-[25px] w-[calc((100%-25px*4)/5)]'>
            <Card className='bg-neutral'>
                <picture className='block w-ful h-[394px] overflow-hidden'>
                    <img className='max-w-full min-h-full object-cover' src={item.Poster} alt={item.Title} />
                </picture>

                <Card.Body className='flex flex-col items-start p-4'>
                    <Card.Title>{item.Title.length > 20 ? `${item.Title.slice(0, 20).trim()}...` : item.Title}</Card.Title>
                    <span className='mb-2 text-neutral-content'>{item.Year}</span>
                    <div className='w-full flex justify-between items-center'>
                        <Link className='btn' animation='true' to={`/movies/${item.imdbID}`}>Перейти</Link>
                        <Button className='text-lg' type='button' onClick={onClick}>{isFavorite || !isSearch ? '♥' : '♡'}</Button>
                    </div>
                </Card.Body>
            </Card>
        </li>
    );
}

export default MovieItem;