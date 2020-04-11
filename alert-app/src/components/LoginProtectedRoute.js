import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUser } from "../helpers/web-storage-controller";
const LoginProtectedRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      getUser() === null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);
export default LoginProtectedRoute;
