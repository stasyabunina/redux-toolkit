
import { useSelector } from 'react-redux';
import MovieList from '../components/MovieList';
import Search from '../features/search/Search';
import Error from '../components/Error';
import { Loading } from 'react-daisyui';
import Loader from '../components/Loader';

function HomePage() {
    const search = useSelector(state => state.search);

    const loadMovies = () => {
        if (search.error) {
            return (<Error text={search.error} />)
        } else {
            return (search.searchList.length !== 0 ? <MovieList items={search.searchList} isSearch='true' /> : search.isLoading ? <Loader /> : <></>)
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