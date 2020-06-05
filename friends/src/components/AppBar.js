import React, { useEffect } from 'react';
import * as MaterialUI from "../MaterialUI";
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toggleLoginButtonText } from "../actions/appBar";

const AppBar = () => {
    const classes = MaterialUI.useStyles();
    const history = useHistory();
    const loginButtonText = useSelector(state => state.appBarReducer.loginButton);
    const dispatch = useDispatch();

    
    const login = () => {

        if(localStorage.getItem("token")) {
            history.push("/");
            dispatch(toggleLoginButtonText("/"))
            localStorage.removeItem("token");
        } else {
            history.push("/login");
        }
        
    }

    useEffect(() => {
        if(localStorage.getItem("token")) {
            dispatch(toggleLoginButtonText("/friends"));
            history.push("/friends");
        }
    }, [dispatch, history.location.pathname, history]);
    

    return (
        <div className = {classes.AppBar_root}>
            <MaterialUI.AppBar position = "static">
                <MaterialUI.Toolbar>
                    {/* <MaterialUI.IconButton edge = "start" className = {classes.AppBar_menuButton} color = "inherit" aria-label = "menu">
                        <MaterialUI.MenuIcon />
                    </MaterialUI.IconButton> */}

                    <MaterialUI.Typography variant = "h6" className = {classes.AppBar_title}>
                        <Link to = "/">Home</Link>
                        <Link to = "/friends">Friends</Link>
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