import { 
    FETCH_FRIENDS_START, 
    FETCH_FRIENDS_SUCCESS, 
    FETCH_FRIENDS_FAILURE, 
    EDIT_FRIENDS_SUCCESS, 
    EDIT_FRIENDS_FAILURE, 
    DELETE_FRIEND_FAILURE, 
    DELETE_FRIEND_SUCCESS,
    ADD_FRIEND
} from "../actions/friends";

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
            };
        case EDIT_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload
            };
        case EDIT_FRIENDS_FAILURE:
            return {
                ...state,
                friends: state.friends,
                error: action.payload
            };
        case DELETE_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload
            };
        case DELETE_FRIEND_FAILURE:
            return {
                ...state,
                friends: state.friends,
                error: action.payload
            };
        case ADD_FRIEND:
            return {
                ...state,
                friends: action.payload
            }
        default:
            return state;
    }
}