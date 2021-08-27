

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { get } from "../../../Utils/rest-util";

const MailServerList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    const { MAIL_SERVER } = urlProperties;
    get(MAIL_SERVER)
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const headers = [
    {
      key: "key",
      display: "Key"
    },
    {
      key: "displayName",
      display: "Name"
    },
    {
      key: "isActive",
      display: "Status"
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

export default MailServerList;
