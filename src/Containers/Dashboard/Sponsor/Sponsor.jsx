import React, { useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { post } from '../../../Utils/rest-util';

const Sponsor = () => {

  const [sponsor, setSponsor] = useState([]);

  const saveData = () => {
    const { SPONSOR } = urlProperties;
    post(SPONSOR, sponsor)
      .then(resp => {

      })
  }

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="name">Sponsor Name</label>
          <input className="" type="text" id="name"
            onClick={(e) => {
              setSponsor({
                ...sponsor,
                sponsorName: e.target.value
              });
            }} />
        </div>
      </form>
    </div>
  );
}


export default Sponsor;

