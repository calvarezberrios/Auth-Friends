import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import AppBar from "./components/AppBar";

const App = () => {
  
  return (
    <div className = "App">
      <AppBar />

      <Switch>
        <Route path = "/login" component = {Login} />
      </Switch>
    </div>
  );
}

export default App;
