

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { deleteItem, get } from "../../../Utils/rest-util";
import Offer from "./Offer";

const { OFFER } = urlProperties;
const OfferList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    get(OFFER)
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const deleteCallback = (id) => {
    deleteItem(`${OFFER}/${id}`)
  }

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
      <ListView headers={headers} dataItems={dataItems}
        deleteCallback={deleteCallback}
        ChildComponent={Offer}
        onRowClick={(e, offer) => {
        alert(offer.name)
      }} />
    </div>
  )
}

export default OfferList;
