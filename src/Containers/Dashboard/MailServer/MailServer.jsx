import React, { useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { post, put } from '../../../Utils/rest-util';

const { MAIL_SERVER } = urlProperties;
const MailServer = (props) => {
  const {
    readOnly,
    childData,
    closeModal
  } = props;
  const [mailServer, setMailServer] = useState(JSON.parse(JSON.stringify(childData)));

  const saveData = () => {
    const method = mailServer.id ? put : post;
    const url = mailServer.id ? `${MAIL_SERVER}/${mailServer.id}` : `${MAIL_SERVER}`;
    method(url, mailServer)
      .then(resp => { })
      .finally(closeModal)
  }

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="name">Key</label>
          <input className="" type="text" id="key"
            readOnly={readOnly}
            value={mailServer.key}
            onChange={(e) => {
              setMailServer({
                ...mailServer,
                key: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="name">Display Name</label>
          <input className="" type="text" id="display-name"
            readOnly={readOnly}
            value={mailServer.displayName}
            onChange={(e) => {
              setMailServer({
                ...mailServer,
                displayName: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Status</label>
          <input className="" type="checkbox" id="is-active"
            readOnly={readOnly}
            checked={mailServer.isActive}
            onChange={(e) => {
              setMailServer({
                ...mailServer,
                isActive: e.target.checked
              });
            }} />
        </div>
        {
          !readOnly ?
            <button onClick={(e) => {
              e.preventDefault();
              saveData();
            }}>{mailServer.id ? 'Update' : 'Create'}</button>
            : ""
        }
      </form>
    </div>
  );
}


export default MailServer;

