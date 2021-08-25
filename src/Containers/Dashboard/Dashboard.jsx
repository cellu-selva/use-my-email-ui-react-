import React from "react";
import {
  useRouteMatch
} from "react-router-dom";
import PrivateRoute from '../../Route/PrivateRoute';
import Sidebar from './Sidebar/Sidebar';
import TestEmailList from './TestEmailList/TestEmailList';

const Dashboard = (props) => {
  const match = useRouteMatch();
  return (
    <div className="w-100">
      Dashboard
      <div style={{ display: "flex" }}>
        <div style={{ width: "240px" }}>
          <Sidebar />
        </div>
        <div>
          <PrivateRoute exact path={`${match.path}/users`} component={TestEmailList}></PrivateRoute>
          {props.children}
        </div>
      </div>
    </div >
  )
}

export default Dashboard;
