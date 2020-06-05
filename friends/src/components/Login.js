import React, { useState } from 'react';
import * as MaterialUI from "../MaterialUI";
import useForm from "../hooks/useForm";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Redirect } from 'react-router-dom';
import { toggleLoginButtonText } from "../actions/appBar";
import { useDispatch } from "react-redux";

const Login = props => {
    const classes = MaterialUI.useStyles();
    const [login, handleChanges] = useForm({username: "", password: ""});
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const submitForm = e => {
        e.preventDefault();

        axiosWithAuth()
        .post("/login", login)
        .then(res => {
            console.log("cea: actions/login.js: getLoginToken: success res: ", res);
            setError("");
            localStorage.setItem("token", res.data.payload);
            props.history.push("/friends");
            dispatch(toggleLoginButtonText(props.history.location.pathname));
            
        })
        .catch(err => {
            console.log("cea: action/login.js: getLoginToken: failure err: ", err.response.status, err.response.statusText, err.response.data.error);
            if(err.response.status === 403) setError(err.response.data.error);
            else setError(err.response.status + " " + err.response.statusText);
        });
    }

    if(localStorage.getItem("token")) return <Redirect to = "/friends" />;

    return (
        <div className = {classes.Login_root}>
            <h2>Login to see your friends!</h2>
            <form className = {classes.LoginForm_root} noValidate autoComplete = "on" onSubmit = {submitForm}>
                <MaterialUI.TextField 
                    id = "username" 
                    type = "text" 
                    label = "Username" 
                    variant = "outlined" 
                    name = "username"
                    value = {login.username}
                    onChange = {handleChanges}
                /><br />
                <MaterialUI.TextField 
                    id = "password" 
                    type = "password" 
                    label = "Password" 
                    variant = "outlined"
                    name = "password"
                    value = {login.password}
                    onChange = {handleChanges}
                /><br />
                {error.length > 0 && <p className = {classes.errorMsg}>{error}</p>}
                <MaterialUI.Button type = "submit" variant = "contained" color = "primary">Login</MaterialUI.Button>
            </form>
        </div>
    );
};

export default Login;