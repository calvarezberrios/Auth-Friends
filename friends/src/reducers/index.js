import { combineReducers } from "redux";
import { friendsReducer } from "./friendsReducer";
import { appBarReducer } from "./appBarReducer";

export default combineReducers({
    friendsReducer,
    appBarReducer,
})