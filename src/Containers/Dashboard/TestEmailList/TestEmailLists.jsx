

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { get } from "../../../Utils/rest-util";
const TestEmailList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    const { TEST_EMAIL } = urlProperties;
    get(TEST_EMAIL)
      .then(resp => {
        setDataItems(resp);
      })
  }, [])

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
      <ListView headers={headers} dataItems={dataItems} />
    </div>
  )
}

export default TestEmailList;
