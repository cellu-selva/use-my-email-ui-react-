import React, { useEffect, useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { get, post, put } from '../../../Utils/rest-util';

const { DOMAIN } = urlProperties;
const Campaign = (props) => {
  const {
    readOnly,
    childData,
    closeModal
  } = props;
  const [campaign, setCampaign] = useState(JSON.parse(JSON.stringify(childData)));
  const [domains, setDomains] = useState([]);
  const [testEmails, setTestEmails] = useState([]);
  const [offers, setOffers] = useState([]);
  const [emailTemplates, setEmailTemplates] = useState([]);

  useEffect(() => {
    get(DOMAIN, {
      limit: 100,
      order: "desc",
      where: {
        isDeleted: false
      },
      fields: {
        name: true,
        id: true
      }
    })
      .then(resp => {
        setDomains(resp);
      })
  }, []);

  useEffect(() => {
    const { TEST_EMAIL } = urlProperties;
    get(TEST_EMAIL, {
      limit: 100,
      order: "desc",
      where: {
        isDeleted: false
      },
      fields: {
        name: true,
        id: true
      }
    })
      .then(resp => {
        setTestEmails(resp);
      })
  }, []);

  useEffect(() => {
    const { OFFER } = urlProperties;
    get(OFFER, {
      limit: 100,
      order: "desc",
      where: {
        isDeleted: false
      },
      fields: {
        name: true,
        id: true
      }
    })
      .then(resp => {
        setOffers(resp);
      })
  }, []);

  useEffect(() => {
    const { EMAIL_TEMPLATE } = urlProperties;
    get(EMAIL_TEMPLATE, {
      limit: 100,
      order: "desc",
      where: {
        isDeleted: false
      },
      fields: {
        name: true,
        id: true
      }
    })
      .then(resp => {
        setEmailTemplates(resp);
      })
  }, []);

  const saveData = () => {
    const { CAMPAIGN } = urlProperties;
    const method = campaign.id ? put : post;
    const url = campaign.id ? `${CAMPAIGN}/${campaign.id}` : `${CAMPAIGN}`;
    method(url, campaign)
      .then(resp => { })
      .finally(closeModal)
  }

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="campaign-name">Campaign Name</label>
          <input className="" type="text" id="campaign-name"
            readOnly={readOnly}
            value={campaign.name}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-subject">Campaign Subject</label>
          <input className="" type="text" id="campaign-subject"
            readOnly={readOnly}
            value={campaign.subject}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                subject: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-from-mail">From Mail</label>
          <input className="" type="email" id="campaign-from-mail"
            readOnly={readOnly}
            value={campaign.fromMail}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                fromMail: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-mail-reply-to"> Mail Reply To</label>
          <input className="" type="email" id="campaign-mail-reply-to"
            readOnly={readOnly}
            value={campaign.mailReplyTo}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                mailReplyTo: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-body-domain">Body Domain</label>
          <input className="" type="text" id="campaign-body-domain"
            readOnly={readOnly}
            value={campaign.bodyDomain}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                bodyDomain: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-spam-check-interval">Spam check Interval</label>
          <input className="" type="number" id="campaign-spam-check-interval"
            readOnly={readOnly}
            value={campaign.spamCheckInterval}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                spamCheckInterval: Number(e.target.value),
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-mails-per-minute">Mails Per Minute</label>
          <input className="" type="number" id="campaign-mails-per-minute"
            readOnly={readOnly}
            value={campaign.noOfMailPerMinute}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                noOfMailPerMinute: Number(e.target.value),
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-message">Message</label>
          <input className="" type="text" id="campaign-message"
            readOnly={readOnly}
            value={campaign.message}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                message: e.target.value
              });
            }} />
        </div>
        {
          campaign.id
            ? <div className="">
              <label className="" htmlFor="campaign-status">Status</label>
              <input className="" type="text" id="campaign-status"
                readOnly={true}
                value={campaign.status}
                onChange={(e) => {
                  setCampaign({
                    ...campaign,
                    status: e.target.value
                  });
                }} />
            </div>
            : ""
        }
        <div className="">
          <label className="" htmlFor="campaign-domains">Domains</label>
          <select className=""
            readOnly={readOnly}
            value={campaign.domainId}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                domainId: e.target.value,
              })
            }}>
            <option value="">select</option>
            {
              domains.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))
            }
          </select>
        </div>
        <div className="">
          <label className="" htmlFor="campaign-domains">Email Templates</label>
          <select className=""
            readOnly={readOnly}
            value={campaign.emailTemplateId}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                emailTemplateId: e.target.value,
              })
            }}>
            <option value="">select</option>
            {
              emailTemplates.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))
            }
          </select>
        </div>
        <div className="">
          <label className="" htmlFor="campaign-domains">Offer</label>
          <select className=""
            readOnly={readOnly}
            value={campaign.offerId}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                offerId: e.target.value,
              })
            }}>
            <option value="">select</option>
            {
              offers.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))
            }
          </select>
        </div>
        <div className="">
          <label className="" htmlFor="campaign-domains">Test Emails</label>
          <select className=""
            readOnly={readOnly}
            value={campaign.testEmailId}
            onChange={(e) => {
              setCampaign({
                ...campaign,
                testEmailId: e.target.value,
              })
            }}>
            <option value="">select</option>
            {

              testEmails.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))
            }
          </select>
        </div>
        <button onClick={(e) => {
          e.preventDefault();
          saveData();
        }}>{campaign.id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}


export default Campaign;

