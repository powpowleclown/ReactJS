import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from './MovieList';
import MovieProfile from './MovieProfile';

const HomePage = () =>
  <div className='container'>
    <div className='row'>
      <MovieList />
      <MovieProfile />
    </div>
  </div>;

export default HomePage;