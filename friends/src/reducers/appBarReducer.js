import { LOGIN_BUTTON_CLICK } from "../actions/appBar";

const initialState = {
    loginButton: "Login",
}

export const appBarReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_BUTTON_CLICK:
            return {
                ...state,
                loginButton: action.payload
            };
        default: 
            return state;
    }
}