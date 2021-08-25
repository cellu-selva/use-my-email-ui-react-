import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/test-email">Test Email</Link>
          </li>
          <li>
            <Link to="/dashboard/subscriber">Subscriber</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}


export default Sidebar;
