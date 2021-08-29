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
      display: "Name"
    },
    {
      key: "subject",
      display: "Subject"
    },
    {
      key: "fromMail",
      display: "From Mail"
    },
    {
      key: "bodyDomain",
      display: "Body Domain"
    },
    {
      key: "spamCheckInterval",
      display: "Spam Check Interval"
    },
    {
      key: "noOfMailsPerMinute",
      display: "Mails Per/Min"
    },
    {
      key: "message",
      display: "Mesage"
    },
    {
      key: "status",
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
