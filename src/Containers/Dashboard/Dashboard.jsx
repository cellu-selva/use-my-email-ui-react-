import React from "react";
import {
  useRouteMatch
} from "react-router-dom";
import PrivateRoute from '../../Route/PrivateRoute';
import UserList from './UserList/UserList';

const Dashboard = (props) => {
  const match = useRouteMatch();
  return (
    <div>
      <PrivateRoute exact path={`${match.path}/users`} component={UserList}></PrivateRoute>
      Dashboard
      {props.children}
    </div>
  )
}

export default Dashboard;
