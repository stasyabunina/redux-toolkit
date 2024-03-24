import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './getMovies';
import { Input, Button } from 'react-daisyui';

function Search() {
    const dispatch = useDispatch();
    const search = useSelector(state => state.search);
    const [form, setForm] = useState({
        value: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(getMovies(form.value.toLowerCase()));
    }

    const onValueChange = (e) => {
        setForm((prevForm) => ({ ...prevForm, value: e.target.value }));
    }

    const loadResults = () => {
        if (search.error) {
            return (<></>)
        } else {
            return (search.totalResults !== '' ? <span className='search__results'>нашлось {search.totalResults} результатов</span> : search.isLoading ? <span className='loader-text'>Загрузка...</span> : <></>)
        }
    }

    return (
        <div className='search__form-wrapper mb-4 flex justify-between items-center'>
            <form className='search__form' onSubmit={onSubmit}>
                <Input type='text' className='search__input mr-4' onChange={onValueChange} value={form.value} placeholder='Найти...' />
                <Button className='search__submit' animation='true'>Найти</Button>
            </form>
            {loadResults()}
        </div>
    );
}

export default Search;