import React, { useEffect, useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { get, post, put } from '../../../Utils/rest-util';

const { OFFER } = urlProperties;
const Offer = (props) => {
  const {
    readOnly,
    childData,
    closeModal
  } = props;
  const [offer, setOffer] = useState(JSON.parse(JSON.stringify(childData)));
  const [sponsors, setSponsors] = useState([]);

  const saveData = () => {
    const method = offer.id ? put : post;
    const url = offer.id ? `${OFFER}/${offer.id}` : `${OFFER}`;
    method(url, offer)
      .then(resp => { })
      .finally(closeModal)
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
            readOnly={readOnly}
            value={offer.name}
            onChange={(e) => {
              setOffer({
                ...offer,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="name">Track Id</label>
          <input className="" type="text" id="track-id"
            readOnly={readOnly}
            value={offer.trackId}
            onChange={(e) => {
              setOffer({
                ...offer,
                trackId: e.target.value
              });
            }} />
        </div><div className="">
          <label className="" htmlFor="name">Redirect Url</label>
          <input className="" type="text" id="track-id"
            readOnly={readOnly}
            value={offer.redirectUrl}
            onChange={(e) => {
              setOffer({
                ...offer,
                redirectUrl: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Status</label>
          <input className="" type="checkbox" id="is-active"
            readOnly={readOnly}
            checked={offer.isActive}
            onChange={(e) => {
              setOffer({
                ...offer,
                isActive: e.target.checked
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Offer Image</label>
          <input className="" type="text" id="is-offer"
            readOnly={readOnly}
            value={offer.offerImg || ""}
            onChange={(e) => {
              const rawImages = e.target.value;
              const images = rawImages.split(',');
              setOffer({
                ...offer,
                offerImg: images
              });
            }} />
          {
            offer.offerImg ?
              offer.offerImg.map((img) => (
                <input className="" type="image" onClick={e => {
                  e.preventDefault();
                }} id="offer-img-preview"
                  src={img} alt="Submit" width="100" height="100" />
              ))
              : ''
          }
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Privacy Image</label>
          <input className="" type="text" id="privacy-img"
            readOnly={readOnly}
            value={offer.privacyImg || ""}
            onChange={(e) => {
              setOffer({
                ...offer,
                privacyImg: e.target.value
              });
            }} />
          {offer.privacyImg && <input className="" type="image" onClick={e => {
            e.preventDefault();
          }} id="offer-img-preview"
            src={offer.privacyImg} alt="Submit" width="100" height="100" />}
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Opt Image</label>
          <input className="" type="text" id="opt-img"
            readOnly={readOnly}
            value={offer.optImg || ""}
            onChange={(e) => {
              setOffer({
                ...offer,
                optImg: e.target.value
              });
            }} />
          {offer.optImg && <input className="" type="image" onClick={e => {
            e.preventDefault();
          }} id="offer-img-preview"
            src={offer.optImg} alt="Submit" width="100" height="100" />}
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Un Subscribe Image</label>
          <input className="" type="text" id="un-sub-img"
            readOnly={readOnly}
            value={offer.unsubImg || ""}
            onChange={(e) => {
              setOffer({
                ...offer,
                unsubImg: e.target.value
              });
            }} />
          {offer.unsubImg && <input className="" type="image" onClick={e => {
            e.preventDefault();
          }} id="offer-img-preview"
            src={offer.unsubImg} alt="Submit" width="100" height="100" />}
        </div>
        <div className="">
          <label className="" htmlFor="sponsor">Sponsor</label>
          <select className=""
            readOnly={readOnly}
            value={offer.sponsor}
            onChange={(e) => {
              setOffer({
                ...offer,
                sponsorId: e.target.value
              });
            }}>
            <option value="">select</option>
            {
              sponsors.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))
            }
          </select>
        </div>
        {
          !readOnly ?
            <button onClick={(e) => {
              e.preventDefault();
              saveData();
            }}>{offer.id ? 'Update' : 'Create'}</button>
            : ""
        }
      </form>
    </div>
  );
}


export default Offer;

