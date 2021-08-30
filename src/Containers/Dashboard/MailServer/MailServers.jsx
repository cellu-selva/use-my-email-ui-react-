

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
      display: "Key",
      type: "string"
    },
    {
      key: "displayName",
      display: "Name",
      type: "string"
    },
    {
      key: "isActive",
      display: "Status",
      type: "boolean"
    },
    {
      key: "updatedAt",
      display: "Updated At",
      type: "date"
    },
    {
      key: "actions",
      display: "Actions",
      type: "options"
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
