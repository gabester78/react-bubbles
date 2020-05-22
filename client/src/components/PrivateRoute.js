import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          // render component
          return <Component {...props} />;
        } else {
          // redirect to login
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
