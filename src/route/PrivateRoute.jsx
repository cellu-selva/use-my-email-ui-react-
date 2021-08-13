import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AppContext } from "../Context/AppContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AppContext);
  return <Route {...rest} render={(props) => (
    (auth && auth.token) ?
      <Component {...props} /> :
      <Redirect to="/" />
  )} />;
};

export default PrivateRoute;
