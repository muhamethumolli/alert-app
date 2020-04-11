import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUserToken } from "../helpers/web-storage-controller";
const LoginProtectedRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      getUserToken() === null ? (
        <Component {...props} />
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);
export default LoginProtectedRoute;
