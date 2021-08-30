

import React, { useEffect, useState } from "react";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { deleteItem, get } from "../../../Utils/rest-util";
import MailClient from "./MailClient";

const { MAIL_CLIENT } = urlProperties;

const MailClientList = (props) => {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    get(MAIL_CLIENT, {
      limit: 100,
      order: "desc",
      where: {
        isDeleted: false,
        isActive: true,
      },
      include: [
        {
          relation: "mailingServer"
        }
      ]
    })
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const deleteCallback = (id) => {
    deleteItem(`${MAIL_CLIENT}/${id}`)
  }

  const headers = [
    {
      key: "name",
      display: "Name"
    },
    {
      key: "isActive",
      display: "Status"
    },
    {
      key: "mailingServer.displayName",
      display: "Server Name"
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
        ChildComponent={MailClient} />
    </div>
  )
}

export default MailClientList;
