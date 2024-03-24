import MovieItem from './MovieItem';

function MovieList({ items, isSearch }) {
    return (
        <ul className='flex flex-wrap [&>*:nth-child(5n)]:mr-0 [&>*:nth-last-child(-n+5)]:mb-0'>
            {items.map(item => (
                <MovieItem key={item.imdbID} item={item} isSearch={isSearch} />
            ))}
        </ul>
    );
} 

export default MovieList;