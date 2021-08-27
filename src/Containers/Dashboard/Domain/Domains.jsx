

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { get } from "../../../Utils/rest-util";

const DomainList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    const { DOMAIN } = urlProperties;
    get(DOMAIN)
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
      key: "url",
      display: "Url"
    },
    {
      key: "ipAddress",
      display: "IP Address"
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
      <ListView headers={headers} dataItems={dataItems} />
    </div>
  )
}

export default DomainList;
