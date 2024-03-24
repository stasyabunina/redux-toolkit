
import { useSelector } from 'react-redux';
import MovieList from '../components/MovieList';
import Search from '../features/search/Search';
import Error from '../components/Error';
import { Loading } from 'react-daisyui';

function HomePage() {
    const search = useSelector(state => state.search);

    const loadMovies = () => {
        if (search.error) {
            return (<Error text={search.error} />)
        } else {
            return (search.searchList.length !== 0 ? <MovieList items={search.searchList} isSearch='true' /> : search.isLoading ? <div className='p-20 w-full flex justify-center'><Loading /></div> : <></>)
        }
    }

    return (
        <div className='search'>
            <Search />
            {loadMovies()}
        </div>
    );
}

export default HomePage;