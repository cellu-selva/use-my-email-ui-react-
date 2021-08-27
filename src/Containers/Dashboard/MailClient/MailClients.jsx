

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { get } from "../../../Utils/rest-util";

const MailClientList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    const { MAIL_CLIENT } = urlProperties;
    get(MAIL_CLIENT)
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const headers = [
    {
      key: "name",
      display: "Name"
    },
    {
      key: "isActive",
      display: "Status"
    },
    {
      key: "mailingServer.displayName",
      display: "Server Name"
    },
    {
      key: "updatedAt",
      display: "Updated At"
    },
    {
      key: "actions",
      display: "Actions"
    },
  ];
  return (
    <div>
      <ListView headers={headers} dataItems={dataItems} />
    </div>
  )
}

export default MailClientList;
