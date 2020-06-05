export const LOGIN_BUTTON_CLICK = "LOGIN_BUTTON_CLICK";

export const toggleLoginButtonText = location => dispatch => {
    let btnText = "Login";

    if(location === "/friends") {
        btnText = "Logout";
    } else {
        btnText = "Login"
    }
    dispatch({
        type: LOGIN_BUTTON_CLICK,
        payload: btnText
    });
}