import { API_REGISTER_URL } from '../../constants';
import { API_LOGIN_URL } from '../../constants';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export function login(email, password) {
    return {
        type: LOGIN,
        username: email,
        password: password
    };
};
 
export function logout() {
    return {
        type: LOGOUT
    };
};
 
export function signup(email, password) {
    return (dispatch) => {
    };
};