

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
      display: "First Name",
      type: "string"
    },
    {
      key: "lasName",
      display: "Last Name",
      type: "string"
    },
    {
      key: "dob",
      display: "Date Of Birth",
      type: "string"
    },
    {
      key: "updatedAt",
      display: "Last Updated",
      type: "date"
    },
    {
      key: 'city',
      display: 'City',
      type: "string"
    },
  ];
  return (
    <div>
      <ListView headers={headers} dataItems={dataItems} />
    </div>
  )
}

export default SubscriberList;
