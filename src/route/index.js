import { Redirect, Switch } from "react-router-dom";
import {
  Dashboard, SignIn,
  SignUp
} from '../Containers';
import TestEmail from "../Containers/Dashboard/TestEmailList/TestEmail";
import PrivateRoute from '../Route/PrivateRoute';
import PublicRoute from '../Route/PublicRoute';

const routes = function () {
  return (
    <Switch>
      <PublicRoute path="/campaign" component={TestEmail}></PublicRoute>
      <PublicRoute path="/auth">
        <PublicRoute exact path="/auth/signin" component={SignIn}></PublicRoute>
        <PublicRoute exact path="/auth/signup" component={SignUp}></PublicRoute>
        <Redirect to="/auth/signin" />
      </PublicRoute>
      <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
      <Redirect to="/auth/signin"></Redirect>
    </Switch>
  )
}();

export default routes;

