import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import AppBar from "./components/AppBar";
import PrivateRoute from './components/PrivateRoute';
import Friends from "./components/Friends";
import Home from "./components/Home";

const App = () => {
  
  return (
    <div className = "App">
      <AppBar />

      <Switch>
        <Route path = "/login" component = {Login} />
        <PrivateRoute path = "/friends" component = {Friends} />
        <Route path = "/" component = {Home} />
      </Switch>
    </div>
  );
}

export default App;
