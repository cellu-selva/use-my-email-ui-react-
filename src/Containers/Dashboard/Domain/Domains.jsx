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
      display: "Name",
      type: "string"
    },
    {
      key: "url",
      display: "Url",
      type: "string"
    },
    {
      key: "ipAddress",
      display: "IP Address",
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
        ChildComponent={Domain}
      />
    </div>
  )
}

export default DomainList;
