

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { deleteItem, get } from "../../../Utils/rest-util";
import MailServer from "./MailServer";

const { MAIL_SERVER } = urlProperties;
const MailServerList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    get(MAIL_SERVER)
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const deleteCallback = (id) => {
    deleteItem(`${MAIL_SERVER}/${id}`)
  }

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
      <ListView headers={headers} dataItems={dataItems}
        deleteCallback={deleteCallback}
        ChildComponent={MailServer} />
    </div>
  )
}

export default MailServerList;
