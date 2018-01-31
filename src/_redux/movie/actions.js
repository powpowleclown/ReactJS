import { API_URL } from '../../constants';
import { API_KEY } from '../../constants';

export const SET_CURRENT_MOVIE = 'SET_CURRENT_CHARACTER';
export const SET_MOVIE_PROFILE = 'SET_CHARACTER_PROFILE';

export function setCurrentMovie(id) {
    return {
      type: SET_CURRENT_MOVIE,
      id,
    };
  }

  export function setMovieProfile(profile) {
    return {
      type: SET_MOVIE_PROFILE,
      profile,
    };
  }

  export function getMovieProfile(id) {
    return dispatch =>
      fetch(`${API_URL}t=${id}${API_KEY}`)
        .then(res => res.json())
        .then(profile => {
          dispatch(setMovieProfile(profile));
        });
  }
  
  