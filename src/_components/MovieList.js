import React from 'react';
import { connect } from 'react-redux';
import {
    setCurrentMovie,
    getMovieProfile,
  } from '../_redux/movie/actions';

  const MovieList = ({ movies, setMovie }) =>
  <div id='character-list' className='col-md-6'>
    <h1>Movies</h1>
    <ul>
    
      {movies.map((movie, i) =>
        <li
          onClick={setMovie(movie.Title)}
          key={movie.Title}
        >
          {movie.Title}
        </li>
      )}
    </ul>
  </div>;

const mapStateToProps = ({ movies }) => ({
	movies,
  });

  const mapDispatchToProps = dispatch => ({
    setMovie(id) {
      return () => {
        dispatch(setCurrentMovie(id));
        dispatch(getMovieProfile(id));
      };
    },
  });

  export default connect(mapStateToProps, mapDispatchToProps)(MovieList);