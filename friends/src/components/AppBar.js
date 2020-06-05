import React from 'react';
import * as MaterialUI from "../MaterialUI";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toggleLoginButtonText } from "../actions/appBar";

const AppBar = () => {
    const classes = MaterialUI.useStyles();
    const history = useHistory();
    const loginButtonText = useSelector(state => state.appBarReducer.loginButton);
    const dispatch = useDispatch();

    
    const login = () => {

        if(history.location.pathname === "/friends") {
            history.push("/");
            dispatch(toggleLoginButtonText("/"))
            localStorage.removeItem("token");
        } else {
            history.push("/login");
        }
        
    }
    

    return (
        <div className = {classes.AppBar_root}>
            <MaterialUI.AppBar position = "static">
                <MaterialUI.Toolbar>
                    <MaterialUI.IconButton edge = "start" className = {classes.AppBar_menuButton} color = "inherit" aria-label = "menu">
                        <MaterialUI.MenuIcon />
                    </MaterialUI.IconButton>

                    <MaterialUI.Typography variant = "h6" className = {classes.AppBar_title} onClick = {() => history.push("/")}>
                        Friends
                    </MaterialUI.Typography>

                    <MaterialUI.Button color = "inherit" onClick = {login}>
                        {loginButtonText}
                    </MaterialUI.Button>
                </MaterialUI.Toolbar>
            </MaterialUI.AppBar>
        </div>
    );
};

export default AppBar;