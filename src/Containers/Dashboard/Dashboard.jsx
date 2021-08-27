import React from "react";
import { useRouteMatch } from "react-router-dom";
import PrivateRoute from '../../Route/PrivateRoute';
import CampaignList from "./Campaign/Campaigns";
import CampaignResultList from "./CampaignResult/CampaignResults";
import DomainList from "./Domain/Domains";
import EmailTemplateList from "./EmailTemplate/EmailTemplates";
import MailClientList from "./MailClient/MailClients";
import MailServerList from "./MailServer/MailServers";
import OfferList from "./Offer/Offers";
import Sidebar from './Sidebar/Sidebars';
import SponsorList from "./Sponsor/Sponsors";
import SubscriberList from "./Subscriber/Subscribers";
import TestEmailList from './TestEmailList/TestEmailLists';

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
          {/* list view route */}
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

          {props.children}
        </div>
      </div>
    </div >
  )
}

export default Dashboard;
