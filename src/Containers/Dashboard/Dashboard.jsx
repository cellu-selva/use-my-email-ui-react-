import React from "react";
import {
  useRouteMatch
} from "react-router-dom";
import PrivateRoute from '../../Route/PrivateRoute';
import Sidebar from './Sidebar/Sidebar';
import SubscriberList from "./Subscriber/Subscriber";
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
          <PrivateRoute exact path={`${match.path}/test-email`} component={TestEmailList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/subscriber`} component={SubscriberList}></PrivateRoute>
          {props.children}
        </div>
      </div>
    </div >
  )
}

export default Dashboard;
