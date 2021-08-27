import React from "react";
import {
  Redirect, useRouteMatch
} from "react-router-dom";
import PrivateRoute from '../../Route/PrivateRoute';
import CampaignList from "./Campaign/Campaign";
import CampaignResultList from "./CampaignResult/CampaignResult";
import DomainList from "./Domain/Domain";
import EmailTemplateList from "./EmailTemplate/EmailTemplate";
import MailClientList from "./MailClient/MailClient";
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
          <PrivateRoute exact path={`${match.path}/campaign-result/:campaignId`} component={CampaignResultList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/domain`} component={DomainList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/email-template`} component={EmailTemplateList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/mail-client`} component={MailClientList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/mail-server`} component={MailServerList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/offers`} component={OfferList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/test-email`} component={TestEmailList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/subscriber`} component={SubscriberList}></PrivateRoute>
          <PrivateRoute exact path={`${match.path}/sponsor`} component={SponsorList}></PrivateRoute>
          <Redirect to={`${match.path}`}></Redirect>
          {props.children}
        </div>
      </div>
    </div >
  )
}

export default Dashboard;
