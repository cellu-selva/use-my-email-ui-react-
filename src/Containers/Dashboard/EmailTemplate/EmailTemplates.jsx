

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { deleteItem, get } from "../../../Utils/rest-util";
import EmailTemplate from "./EmailTemplate";

const { EMAIL_TEMPLATE } = urlProperties;

const EmailTemplateList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    get(EMAIL_TEMPLATE)
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const deleteCallback = (id) => {
    deleteItem(`${EMAIL_TEMPLATE}/${id}`)
  }

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
      <ListView headers={headers} dataItems={dataItems}
        deleteCallback={deleteCallback}
        ChildComponent={EmailTemplate} />
    </div>
  )
}

export default EmailTemplateList;
