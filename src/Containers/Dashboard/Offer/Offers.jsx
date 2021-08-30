

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
      display: "Name",
      type: "string"
    },
    {
      key: "trackId",
      display: "Track Id",
      type: "string"
    },
    {
      key: "isActive",
      display: "Status",
      type: "boolean"
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
        ChildComponent={Offer}
        onRowClick={(e, offer) => {
        alert(offer.name)
      }} />
    </div>
  )
}

export default OfferList;
