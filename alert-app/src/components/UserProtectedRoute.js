import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUser } from "../helpers/web-storage-controller";
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
      getUser() !== null ? (
        <Component {...props} routes={routes} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
export default UserProtectedRoute;
