import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";
export const EDIT_FRIENDS_SUCCESS = "EDIT_FRIENDS_SUCCESS";
export const EDIT_FRIENDS_FAILURE = "EDIT_FRIENDS_FAILURE";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIENDS_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIENDS_FAILURE";
export const ADD_FRIEND = "ADD_FRIEND";

export const getFriends = () => dispatch => {
    dispatch({type: FETCH_FRIENDS_START});

    axiosWithAuth()
        .get("/friends")
        .then(res => {
            console.log("cea: actions/friends.js: getFriends: res: ", res);

            dispatch({
                type: FETCH_FRIENDS_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log("cea: actions/friends.js: getFriends: err: ", err.response.status, err.response.data.error, err.message);

            dispatch({
                type: FETCH_FRIENDS_FAILURE,
                payload: err.response.status === 403 ? err.response.data.error 
                                                    : "Friends List " + err.response.statusText
            });
        });
}

export const editFriend = friend => dispatch => {
    axiosWithAuth()
        .put(`/friends/${friend.id}`, friend)
        .then(res => {
            dispatch({
                type: EDIT_FRIENDS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: EDIT_FRIENDS_FAILURE,
                payload: err.response.status === 404 ? err.response.data.msg : err.message
            });
        })
}

export const deleteFriend = id => dispatch => {
    axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_FRIEND_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: DELETE_FRIEND_FAILURE,
                payload: err.response.status === 404 ? err.response.data.msg : err.message
            });
        })
}

export const addFriend = () => dispatch => {
    axiosWithAuth()
        .post("/friends", {name: "", age: "", email: ""})
        .then(res => {
            dispatch({
                type: ADD_FRIEND,
                payload: res.data
            });
        })
        .catch(err => {
            console.log("cea: actions/friends.js: addFriend: err: ", err.response.status, err.response.data.msg, err.message)
        })
}