import React from "react";
import {
  useRouteMatch
} from "react-router-dom";
import PrivateRoute from '../../Route/PrivateRoute';
import CampaignList from "./Campaign/Campaign";
import DomainList from "./Domain/Domain";
import MailServerList from "./MailServer/MailServer";
import OfferList from "./Offer/Offer";
import Sidebar from './Sidebar/Sidebar';
import SponsorList from "./Sponsor/Sponsor";
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
          <PrivateRoute exact path={`${match.path}/campaign`} component={CampaignList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/domain`} component={DomainList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/email-template`} component={SubscriberList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/mail-client`} component={SubscriberList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/mail-server`} component={MailServerList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/offers`} component={OfferList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/test-email`} component={TestEmailList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/subscriber`} component={SubscriberList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/sponsor`} component={SponsorList}></PrivateRoute>
          {props.children}
        </div>
      </div>
    </div >
  )
}

export default Dashboard;
