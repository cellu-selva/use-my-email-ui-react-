import React, { useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { post } from '../../../Utils/rest-util';

const MailServer = () => {

  const [mailServer, setMailServer] = useState([]);

  const saveData = () => {
    const { MAIL_CLIENT } = urlProperties;
    post(MAIL_CLIENT, mailServer)
      .then(resp => {

      })
  }

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="name">Key</label>
          <input className="" type="text" id="key"
            onClick={(e) => {
              setMailServer({
                ...mailServer,
                key: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="name">Display Name</label>
          <input className="" type="text" id="display-name"
            onClick={(e) => {
              setMailServer({
                ...mailServer,
                displayName: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Status</label>
          <input className="" type="checkbox" id="is-active"
            onChange={(e) => {
              setMailServer({
                ...mailServer,
                isActive: e.target.value
              });
            }} />
        </div>
      </form>
    </div>
  );
}


export default MailServer;

