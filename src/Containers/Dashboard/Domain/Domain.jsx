import React, { useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { post, put } from "../../../Utils/rest-util";

const Domain = (props) => {
  const {
    readOnly,
    childData,
    closeModal
  } = props;
  const [domain, setDomain] = useState(JSON.parse(JSON.stringify(childData)));

  const saveData = () => {
    const { DOMAIN } = urlProperties;
    const method = domain.id ? put : post;
    const url = domain.id ? `${DOMAIN}/${domain.id}` : `${DOMAIN}`;
    method(url, domain)
      .then(resp => {
        debugger
      })
      .finally(closeModal)
  }
  return (
    <div className="">
      {/* <form className=""> */}
        <div className="">
          <label className="" htmlFor="domain-name">Name</label>
          <input className="" type="text" id="domain-name"
          readOnly={readOnly}
          value={domain.name}
          onChange={(e) => {
              setDomain({
                ...domain,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="domain-url">URL</label>
          <input className="" type="text" id="domain-url"
          readOnly={readOnly}
          value={domain.url}
          onChange={(e) => {
              setDomain({
                ...domain,
                url: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="domain-ip">IP Address</label>
          <input className="" type="text" id="domain-ip"
          readOnly={readOnly}
          value={domain.ipAddress ? domain.ipAddress[0] : ""}
          onChange={(e) => {
              setDomain({
                ...domain,
                ipAddress: [e.target.value]
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="domain-is-active">Status</label>
          <input className="" type="checkbox" id="domain-is-active"
          readOnly={readOnly}
          checked={domain.isActive}
          onChange={(e) => {
              setDomain({
                ...domain,
                isActive: e.target.checked
              });
            }} />
        </div>
      {
        !readOnly ?
          <button onClick={(e) => {
            saveData();
          }}>{domain.id ? 'Update' : 'Create'}</button>
          : ""
      }
      {/* </form> */}
    </div>
  );
}


export default Domain;

