

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { deleteItem, get } from "../../../Utils/rest-util";
import Sponsor from "./Sponsor";

const { SPONSOR } = urlProperties;
const SponsorList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    get(SPONSOR)
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const deleteCallback = (id) => {
    deleteItem(`${SPONSOR}/${id}`)
  }

  const headers = [
    {
      key: "name",
      display: "Name",
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
        ChildComponent={Sponsor}
        onRowClick={(e, offer) => {
          alert(offer.name)
        }} />
    </div>
  )
}

export default SponsorList;
