import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { deleteItem, get } from "../../../Utils/rest-util";
import Campaign from "./Campaign";

const { CAMPAIGN } = urlProperties;

const CampaignList = (props) => {
  const history = useHistory();
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    get(CAMPAIGN)
      .then(resp => {
        setDataItems(resp);
      })
  }, []);

  const deleteCallback = (id) => {
    deleteItem(`${CAMPAIGN}/${id}`)
  }

  const headers = [
    {
      key: "name",
      display: "Name",
      type: "string"
    },
    {
      key: "subject",
      display: "Subject",
      type: "string"
    },
    {
      key: "fromMail",
      display: "From Mail",
      type: "string"
    },
    {
      key: "bodyDomain",
      display: "Body Domain",
      type: "string"
    },
    {
      key: "spamCheckInterval",
      display: "Spam Check Interval",
      type: "number"
    },
    {
      key: "noOfMailPerMinute",
      display: "Mails Per/Min",
      type: "number"
    },
    {
      key: "message",
      display: "Mesage",
      type: "string"
    },
    {
      key: "status",
      display: "Status",
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
      <ListView
        headers={headers}
        dataItems={dataItems}
        deleteCallback={deleteCallback}
        ChildComponent={Campaign}
        onRowClick={(e, campaign) => {
        e.preventDefault();
        history.push(`campaign-result/${campaign.id}`);
      }} />
    </div>
  )
}

export default CampaignList;
