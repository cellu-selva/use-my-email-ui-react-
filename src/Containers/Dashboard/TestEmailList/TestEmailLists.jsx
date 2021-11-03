

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { deleteItem, get } from "../../../Utils/rest-util";
import TestEmail from "./TestEmail";

const { TEST_EMAIL } = urlProperties;
const TestEmailList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    get(TEST_EMAIL)
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const deleteCallback = (id) => {
    deleteItem(`${TEST_EMAIL}/${id}`)
  }

  const headers = [
    {
      key: "name",
      display: "Name",
      type: "string"
    },
    {
      key: "email",
      display: "Email",
      type: "string"
    },
    {
      key: "status",
      display: "Status",
      type: "string"
    },
    {
      key: "type",
      display: "Type",
      type: "string"
    }, {
      key: "updatedAt",
      display: "Last Updated",
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
        ChildComponent={TestEmail}
        onRowClick={(e, offer) => {
          alert(offer.name)
        }} />
    </div>
  )
}

export default TestEmailList;
