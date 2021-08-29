import React, { useEffect, useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { get, post } from '../../../Utils/rest-util';

const Offer = () => {

  const [offer, setOffer] = useState([]);
  const [sponsors, setSponsors] = useState([]);

  const saveData = () => {
    const { OFFER } = urlProperties;
    post(OFFER, Offer)
      .then(resp => {

      })
  }

  useEffect(() => {
    const { SPONSOR } = urlProperties;
    get(SPONSOR, {
      limit: 100,
      order: "desc",
      where: {
        isDeleted: false
      },
      fields: {
        name: true,
        id: true
      }
    })
      .then(resp => {
        setSponsors(resp);
      })
  }, []);

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="name">Name</label>
          <input className="" type="text" id="name"
            onClick={(e) => {
              setOffer({
                ...Offer,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="name">Track Id</label>
          <input className="" type="text" id="track-id"
            onClick={(e) => {
              setOffer({
                ...Offer,
                trackId: e.target.value
              });
            }} />
        </div><div className="">
          <label className="" htmlFor="name">Redirect Url</label>
          <input className="" type="text" id="track-id"
            onClick={(e) => {
              setOffer({
                ...Offer,
                redirectUrl: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Status</label>
          <input className="" type="checkbox" id="is-active"
            onChange={(e) => {
              setOffer({
                ...offer,
                isActive: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Offer Image</label>
          <input className="" type="file" id="is-offer"
            onChange={(e) => {
              // handleFileUpload()
              // write a generic method to handle file upload
              // handle offer Image upload
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Privacy Image</label>
          <input className="" type="file" id="privacy-img"
            onChange={(e) => {
              // handleFileUpload()
              // write a generic method to handle file upload
              // handle offer Image upload
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Opt Image</label>
          <input className="" type="file" id="opt-img"
            onChange={(e) => {
              // handleFileUpload()
              // write a generic method to handle file upload
              // handle offer Image upload
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Un Subscribe Image</label>
          <input className="" type="file" id="un-sub-img"
            onChange={(e) => {
              // handleFileUpload()
              // write a generic method to handle file upload
              // handle offer Image upload
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="sponsor">Sponsor</label>
          <select className="">
            <option value="">select</option>
            {
              sponsors.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))
            }
          </select>
        </div>
      </form>
    </div>
  );
}


export default Offer;

