import {
    FETCH_LOGIN_START,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE
} from "../actions/login";

export const initialState = {
    friends: [],
    isFetching: false,
    error: "",
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOGIN_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload);

            return {
                ...state,
                isFetching: false,
            };
        case FETCH_LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                friends: [],
                error: action.payload
            }
        default:
            return state;
    }
}