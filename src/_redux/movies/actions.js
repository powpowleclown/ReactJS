import { API_URL } from '../../constants';
import { API_KEY } from '../../constants';

export const SET_MOVIES = 'SET_MOVIES';

export function getMovies () {
    return dispatch => 
    fetch(`${API_URL}s=Superman${API_KEY}`)
        .then(res => res.json())
        .then(res => res.Search)
        .then(movies => dispatch(setMovies(movies)));
}

export function setMovies(movies) {
    return {
        type: SET_MOVIES,
        movies
    }
}