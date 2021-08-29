import React, { useEffect, useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { get, post } from '../../../Utils/rest-util';

const MailClient = () => {

  const [mailClient, setMailClient] = useState({});
  const [mailServer, setMailServer] = useState([]);

  useEffect(() => {
    const { MAIL_SERVER } = urlProperties;
    get(MAIL_SERVER, {
      limit: 100,
      order: "desc",
      where: {
        isDeleted: false,
        isActive: true,
      },
      fields: {
        displayName: true,
        id: true
      }
    })
      .then(resp => {
        setMailServer(resp);
      })
  }, []);

  const saveData = () => {
    const { MAIL_CLIENT } = urlProperties;
    post(MAIL_CLIENT, mailClient)
      .then(resp => {

      })
  }

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="name">Name</label>
          <input className="" type="text" id="name"
            onClick={(e) => {
              setMailClient({
                ...mailClient,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Status</label>
          <input className="" type="checkbox" id="is-active"
            onChange={(e) => {
              setMailClient({
                ...mailClient,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="mailing-server">Mailing Server</label>
          <select className=""
            onChange={(e) => {
              setMailClient({
                ...mailClient,
                mailingServerId: e.target.value
              });
            }}>
            {
              mailServer.map((item) => {
                <option value={item.id}>{item.name}</option>
              })
            }
          </select>
        </div>
        {/* get the config templae based on the mail server selected */}
      </form>
    </div>
  );
}


export default MailClient;

