import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import MovieDetailPage from './pages/MovieDetailPage';
import NavMenu from './components/NavMenu';
import FavoriteAlert from './components/FavoriteAlert';

function App() {
  return (
    <Router>
      <div className='container'>
        <NavMenu />
        <FavoriteAlert />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path={process.env.REACT_APP_FAVORITE} element={<FavoritePage />} />
          <Route path={process.env.REACT_APP_MOVIE_ID} element={<MovieDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
