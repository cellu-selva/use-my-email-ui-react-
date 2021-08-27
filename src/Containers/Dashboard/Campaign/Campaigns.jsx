import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ListView from "../../../PresentationalComponents/ListView";
import { urlProperties } from "../../../Utils/constant";
import { get } from "../../../Utils/rest-util";

const CampaignList = (props) => {
  const history = useHistory();
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    const { CAMPAIGN } = urlProperties;
    get(CAMPAIGN)
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
      key: "spanCheckInterval",
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
      <ListView headers={headers} dataItems={dataItems} onRowClick={(e, campaign) => {
        e.preventDefault();
        history.push(`campaign-result/${campaign.id}`);
      }} />
    </div>
  )
}

export default CampaignList;
