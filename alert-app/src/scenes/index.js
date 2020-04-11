import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../helpers";

import Login from "./auth/scenes/Login";
import SignUp from "./auth/scenes/SignUp";
import Dashboard from "./dashborad/scenes/Dashboard";
import UserProtectedRoute from "../components/UserProtectedRoute";
import LoginProtectedRoute from "../components/LoginProtectedRoute";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <LoginProtectedRoute exact path="/" component={Login} />
          <LoginProtectedRoute exact path="/signup" component={SignUp} />
          <UserProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
