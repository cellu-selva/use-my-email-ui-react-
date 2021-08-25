

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { get } from "../../../Utils/rest-util";

const OfferList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    const { OFFER } = urlProperties;
    get(OFFER)
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
      key: "trackId",
      display: "Track Id"
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

export default OfferList;
