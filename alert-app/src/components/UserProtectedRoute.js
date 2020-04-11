import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUserToken } from "../helpers/web-storage-controller";
const UserProtectedRoute = ({
  component: Component,
  routes,
  role,
  token,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      getUserToken() !== null ? (
        <Component {...props} routes={routes} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
export default UserProtectedRoute;
