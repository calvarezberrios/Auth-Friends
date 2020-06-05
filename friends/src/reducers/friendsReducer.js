import { FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from "../actions/friends";

export const initialState = {
    friends: [],
    isFetching: false,
    error: "",
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                friends: [],
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}