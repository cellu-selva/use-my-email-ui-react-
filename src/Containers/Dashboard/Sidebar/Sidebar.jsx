import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard/campaign">Campaign</Link>
          </li>
          <li>
            <Link to="/dashboard/domain">Domain</Link>
          </li>
          <li>
            <Link to="/dashboard/email-template">Email Temaplate</Link>
          </li>
          <li>
            <Link to="/dashboard/mail-client">Mail Client</Link>
          </li>
          <li>
            <Link to="/dashboard/mail-server">Mail Server</Link>
          </li>
          <li>
            <Link to="/dashboard/offers">Offers</Link>
          </li>
          <li>
            <Link to="/dashboard/test-email">Test Email</Link>
          </li>
          <li>
            <Link to="/dashboard/subscriber">Subscriber</Link>
          </li>
          <li>
            <Link to="/dashboard/sponsor">Sponsor</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}


export default Sidebar;
