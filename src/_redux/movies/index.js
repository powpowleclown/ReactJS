import { SET_MOVIES } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_MOVIES:
            return action.movies;
        default:
            return state;
    }
};