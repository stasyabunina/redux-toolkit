import { useSelector } from 'react-redux';
import MovieList from '../components/MovieList';

function FavoritePage() {
    const favorites = useSelector(state => state.favorites);

    return (
        <div className='favorite'>
            {favorites.length !== 0 ? <MovieList items={favorites} /> : <span>У вас нет избранного</span>}
        </div>
    );
}

export default FavoritePage;