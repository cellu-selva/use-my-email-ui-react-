import React, { useEffect, useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { get } from '../../../Utils/rest-util';

const Campaign = () => {

  const [campaign, setCampaign] = useState({});
  const [domains, setDomains] = useState([]);
  const [testEmails, setTestEmails] = useState([]);
  const [offers, setOffers] = useState([]);
  const [emailTemplates, setEmailTemplates] = useState([]);

  useEffect(() => {
    const { DOMAIN } = urlProperties;
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

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="campaign-name">Campaign Name</label>
          <input className="" type="text" id="campaign-name"
            onClick={(e) => {
              setCampaign({
                ...campaign,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-subject">Campaign Subject</label>
          <input className="" type="text" id="campaign-subject"
            onClick={(e) => {
              setCampaign({
                ...campaign,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-from-mail">From Mail</label>
          <input className="" type="text" id="campaign-from-mail"
            onClick={(e) => {
              setCampaign({
                ...campaign,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-mail-reply-to"> Mail Reply To</label>
          <input className="" type="text" id="campaign-mail-reply-to"
            onClick={(e) => {
              setCampaign({
                ...campaign,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-body-domain">Body Domain</label>
          <input className="" type="text" id="campaign-body-domain"
            onClick={(e) => {
              setCampaign({
                ...campaign,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-spam-check-interval">Spam check Interval</label>
          <input className="" type="text" id="campaign-spam-check-interval"
            onClick={(e) => {
              setCampaign({
                ...campaign,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-mails-per-minute">Mails Per Minute</label>
          <input className="" type="text" id="campaign-mails-per-minute"
            onClick={(e) => {
              setCampaign({
                ...campaign,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-message">Message</label>
          <input className="" type="text" id="campaign-message"
            onClick={(e) => {
              setCampaign({
                ...campaign,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-status">Status</label>
          <input className="" type="text" id="campaign-status"
            onClick={(e) => {
              setCampaign({
                ...campaign,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="campaign-domains">Domains</label>
          <select className="">
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
          <select className="">
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
          <select className="">
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
          <select className="">
            <option value="">select</option>
            {

              testEmails.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))
            }
          </select>
        </div>
      </form>
    </div>
  );
}


export default Campaign;

