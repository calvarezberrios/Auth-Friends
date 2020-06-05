import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_LOGIN_START = "FETCH_LOGIN_START";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAILURE = "FETCH_LOGIN_FAILURE";

export const getLoginToken = user => dispatch => {
    axiosWithAuth()
        .post("/login", user)
        .then(res => {
            console.log("cea: actions/login.js: getLoginToken: success res: ", res);

            dispatch({
                type: FETCH_LOGIN_SUCCESS,
                payload: res.data.payload
            })

            

        })
        .catch(err => {
            console.log("cea: action/login.js: getLoginToken: failure err: ", err.response.status, err.response.data.error, err.response.statusText);

            dispatch({
                type: FETCH_LOGIN_FAILURE,
                payload: err.response.status === 403 ? err.response.data.error : err.response.status + " " + err.response.statusText
            })
        });
}

