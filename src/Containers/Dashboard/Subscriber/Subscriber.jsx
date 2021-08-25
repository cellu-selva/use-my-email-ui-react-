

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { get } from "../../../Utils/rest-util";
const SubscriberList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    const { SUBSCRIBER } = urlProperties;
    get(SUBSCRIBER)
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const headers = [
    {
      key: "firsName",
      display: "First Name"
    },
    {
      key: "lasName",
      display: "Last Name"
    },
    {
      key: "dob",
      display: "Date Of Birth"
    },
    {
      key: "updatedAt",
      display: "Last Updated"
    },
    {
      key: 'city',
      value: 'City'
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

export default SubscriberList;
