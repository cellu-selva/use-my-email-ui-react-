import React, { useEffect, useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { post } from '../../../Utils/rest-util';

const Domain = () => {

  const [domain, setDomain] = useState({});

  useEffect(() => {
    const { DOMAIN } = urlProperties;
    post(DOMAIN, domain)
      .then(resp => {

      })
  }, []);

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="domain-name">Name</label>
          <input className="" type="text" id="domain-name"
            onClick={(e) => {
              setDomain({
                ...domain,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="domain-url">URL</label>
          <input className="" type="text" id="domain-url"
            onClick={(e) => {
              setDomain({
                ...domain,
                url: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="domain-ip">IP Address</label>
          <input className="" type="text" id="domain-ip"
            onClick={(e) => {
              setDomain({
                ...domain,
                ipAddress: [e.target.value]
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="domain-is-active">Status</label>
          <input className="" type="checkbox" id="domain-is-active"
            onClick={(e) => {
              setDomain({
                ...domain,
                isActive: e.target.value
              });
            }} />
        </div>
      </form>
    </div>
  );
}


export default Domain;

