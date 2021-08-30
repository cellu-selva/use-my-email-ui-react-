

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
      display: "Name"
    },
    {
      key: "email",
      display: "Email"
    },
    {
      key: "status",
      display: "Status"
    },
    {
      key: "updatedAt",
      display: "Last Updated"
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
        ChildComponent={TestEmail}
        onRowClick={(e, offer) => {
          alert(offer.name)
        }} />
    </div>
  )
}

export default TestEmailList;
