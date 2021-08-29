import React, { useEffect, useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { post } from '../../../Utils/rest-util';

const EmailTemplate = () => {

  const [emailTemplate, setEmailTemplate] = useState({});

  useEffect(() => {
    const { EMAIL_TEMPLATE } = urlProperties;
    post(EMAIL_TEMPLATE, emailTemplate)
      .then(resp => {

      })
  }, []);

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="email-templpate-name">Name</label>
          <input className="" type="text" id="email-templpate-name"
            onClick={(e) => {
              setEmailTemplate({
                ...emailTemplate,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="email-templpate-url">Type</label>
          <input className="" type="text" id="email-templpate-url"
            onClick={(e) => {
              setEmailTemplate({
                ...emailTemplate,
                Type: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="email-templpate-ip">Subject</label>
          <input className="" type="text" id="email-templpate-ip"
            onClick={(e) => {
              setEmailTemplate({
                ...emailTemplate,
                subject: [e.target.value]
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="email-templpate-ip">Message</label>
          <input className="" type="text" id="email-templpate-ip"
            onClick={(e) => {
              setEmailTemplate({
                ...emailTemplate,
                message: [e.target.value]
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="email-templpate-is-active">Status</label>
          <input className="" type="checkbox" id="email-templpate-is-active"
            onClick={(e) => {
              setEmailTemplate({
                ...emailTemplate,
                isActive: e.target.value
              });
            }} />
        </div>
      </form>
    </div>
  );
}


export default EmailTemplate;

