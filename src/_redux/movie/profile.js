import { SET_MOVIE_PROFILE } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_PROFILE:
      return action.profile;
    default:
      return state;
  }
};
