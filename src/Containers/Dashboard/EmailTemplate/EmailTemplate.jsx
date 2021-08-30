import React, { useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { post, put } from '../../../Utils/rest-util';

const { EMAIL_TEMPLATE } = urlProperties;
const EmailTemplate = (props) => {
  const {
    readOnly,
    childData,
    closeModal
  } = props;
  const [emailTemplate, setEmailTemplate] = useState(JSON.parse(JSON.stringify(childData)));

  const saveData = () => {
    const method = emailTemplate.id ? put : post;
    const url = emailTemplate.id ? `${EMAIL_TEMPLATE}/${emailTemplate.id}` : `${EMAIL_TEMPLATE}`;
    method(url, emailTemplate)
      .then(resp => { })
      .finally(closeModal)
  }

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="email-templpate-name">Name</label>
          <input className="" type="text" id="email-templpate-name"
            readOnly={readOnly}
            value={emailTemplate.name}
            onChange={(e) => {
              setEmailTemplate({
                ...emailTemplate,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="email-templpate-url">Type</label>
          <input className="" type="text" id="email-templpate-url"
            readOnly={readOnly}
            value={emailTemplate.type}
            onChange={(e) => {
              setEmailTemplate({
                ...emailTemplate,
                type: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="email-templpate-ip">Subject</label>
          <input className="" type="text" id="email-templpate-ip"
            readOnly={readOnly}
            value={emailTemplate.subject}
            onChange={(e) => {
              setEmailTemplate({
                ...emailTemplate,
                subject: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="email-templpate-ip">Message</label>
          <input className="" type="text" id="email-templpate-ip"
            readOnly={readOnly}
            value={emailTemplate.message}
            onChange={(e) => {
              setEmailTemplate({
                ...emailTemplate,
                message: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="email-templpate-is-active">Status</label>
          <input className="" type="checkbox" id="email-templpate-is-active"
            readOnly={readOnly}
            checked={emailTemplate.isActive}
            onChange={(e) => {
              setEmailTemplate({
                ...emailTemplate,
                isActive: e.target.checked
              });
            }} />
        </div>
        {
          !readOnly ?
            <button onClick={(e) => {
              e.preventDefault();
              saveData();
            }}>{emailTemplate.id ? 'Update' : 'Create'}</button>
            : ""
        }
      </form>
    </div>
  );
}


export default EmailTemplate;

