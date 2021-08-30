

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
      display: "Name",
      type: "string"
    },
    {
      key: "isActive",
      display: "Status",
      type: "boolean"
    },
    {
      key: "subject",
      display: "Subject",
      type: "string"
    },
    {
      key: "message",
      display: "Message",
      type: "string"
    },
    {
      key: "type",
      display: "Type",
      type: "string"
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
        ChildComponent={EmailTemplate} />
    </div>
  )
}

export default EmailTemplateList;
