

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { get } from "../../../Utils/rest-util";

const EmailTemplateList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    const { EMAIL_TEMPLATE } = urlProperties;
    get(EMAIL_TEMPLATE)
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
      key: "subject",
      display: "Subject"
    },
    {
      key: "message",
      display: "Message"
    },
    {
      key: "type",
      display: "Type"
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

export default EmailTemplateList;
