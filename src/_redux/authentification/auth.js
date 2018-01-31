import { LOGIN } from './actions';
import { LOGOUT } from './actions';

const initialState = {
    isLoggedIn: false,
    email: '',
    password: ''
};
 
export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN: 
            return Object.assign({}, state, { 
                isLoggedIn: true,
                email: action.email,
                password: action.password
            });
        case LOGOUT:
            return Object.assign({}, state, { 
                isLoggedIn: false,
                email: '',
                password: ''
            });
        default:
            return state;
    }
}