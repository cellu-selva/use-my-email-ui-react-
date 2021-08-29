import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { deleteItem, get } from "../../../Utils/rest-util";
import Domain from './Domain';

const { DOMAIN } = urlProperties;

const DomainList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    get(DOMAIN)
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const deleteCallback = (id) => {
    deleteItem(`${DOMAIN}/${id}`)
  }

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
      <ListView headers={headers} dataItems={dataItems}
        deleteCallback={deleteCallback}
        ChildComponent={Domain}
      />
    </div>
  )
}

export default DomainList;
