import React, { useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { post, put } from '../../../Utils/rest-util';

const { SPONSOR } = urlProperties;
const Sponsor = (props) => {
  const {
    readOnly,
    childData,
    closeModal
  } = props;
  const [sponsor, setSponsor] = useState(JSON.parse(JSON.stringify(childData)));

  const saveData = () => {
    const method = sponsor.id ? put : post;
    const url = sponsor.id ? `${SPONSOR}/${sponsor.id}` : `${SPONSOR}`;
    method(url, sponsor)
      .then(resp => { })
      .finally(closeModal)
  }

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="name">Sponsor Name</label>
          <input className="" type="text" id="name"
            readOnly={readOnly}
            value={sponsor.name}
            onChange={(e) => {
              setSponsor({
                ...sponsor,
                name: e.target.value
              });
            }} />
        </div>
        {
          !readOnly ?
            <button onClick={(e) => {
              e.preventDefault();
              saveData();
            }}>{sponsor.id ? 'Update' : 'Create'}</button>
            : ""
        }
      </form>
    </div>
  );
}


export default Sponsor;

