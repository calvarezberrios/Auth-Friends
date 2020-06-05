import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

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