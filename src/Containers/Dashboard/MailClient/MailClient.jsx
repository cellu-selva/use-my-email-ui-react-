import React, { useEffect, useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { get, post, put } from '../../../Utils/rest-util';

const MailClient = (props) => {

  const {
    readOnly,
    childData,
    closeModal
  } = props;
  const [mailClient, setMailClient] = useState(JSON.parse(JSON.stringify(childData)));
  const [mailServers, setMailServers] = useState([]);

  const saveData = () => {
    const { MAIL_CLIENT } = urlProperties;
    const method = mailClient.id ? put : post;
    const url = mailClient.id ? `${MAIL_CLIENT}/${mailClient.id}` : `${MAIL_CLIENT}`;
    method(url, mailClient)
      .then(resp => { })
      .finally(closeModal)
  }

  useEffect(() => {
    const { MAIL_SERVER } = urlProperties;
    get(MAIL_SERVER, {
      limit: 100,
      order: "desc",
      where: {
        isActive: true,
      },
      fields: {
        displayName: true,
        id: true
      }
    })
      .then(resp => {
        setMailServers(resp);
      })
  }, []);

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="name">Name</label>
          <input className="" type="text" id="name"
            readOnly={readOnly}
            value={mailClient.name}
            onChange={(e) => {
              setMailClient({
                ...mailClient,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Status</label>
          <input className="" type="checkbox" id="is-active"
            readOnly={readOnly}
            checked={mailClient.isActive}
            onChange={(e) => {
              setMailClient({
                ...mailClient,
                isActive: e.target.checked
              });
            }} />
        </div>
        {/* dummy config */}
        <div className="">
          <label className="" htmlFor="is-active">Config</label>
          <input className="" type="text" id="config"
            readOnly={readOnly}
            value={mailClient.config ? mailClient.config.token : ""}
            onChange={(e) => {
              setMailClient({
                ...mailClient,
                config: { token: e.target.value }
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="mailing-server">Mailing Server</label>
          <select className=""
            readOnly={readOnly}
            value={mailClient.mailingServer ? mailClient.mailingServer.name : ""}
            onChange={(e) => {
              setMailClient({
                ...mailClient,
                mailingServerId: e.target.value
              });
            }}>
            <option value="">select</option>
            {
              mailServers.map((item) => (
                <option value={item.id}>{item.displayName}</option>
              ))
            }
          </select>
        </div>
        {/* get the config templae based on the mail server selected */}
        {
          !readOnly ?
            <button onClick={(e) => {
              e.preventDefault();
              saveData();
            }}>{mailClient.id ? 'Update' : 'Create'}</button>
            : ""
        }
      </form>
    </div>
  );
}


export default MailClient;

