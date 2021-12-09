import {FETCH_SCORES, FETCH_USERS, LOGIN, LOGOUT, SUBMIT_SCORE} from "./actions";

const initialState = {
    isAuth: false,
    users: [],
    scores: []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case LOGIN:
            return {...state, isAuth: true}
        case LOGOUT:
            return {...state, isAuth: false}
        case FETCH_USERS:
            return {...state, users: payload}
        case FETCH_SCORES:
            return {...state, scores: payload}
        case SUBMIT_SCORE:
            return {...state, scores: payload}
        default:
            return state;
    }
}