import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../helpers";

import Login from "./auth/scenes/Login";
import SignUp from "./auth/scenes/SignUp";
import Dashboard from "./dashborad/scenes/Dashboard";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact component={Login} path="/" />
          <Route exact component={SignUp} path="/signup" />
          <Route exact component={Dashboard} path="/dashboard" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
