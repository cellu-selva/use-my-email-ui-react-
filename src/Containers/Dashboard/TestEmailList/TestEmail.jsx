import React, { useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { post } from '../../../Utils/rest-util';

const TestEmail = () => {

  const [testEmail, setTestEmail] = useState([]);

  const saveData = () => {
    const { TEST_EMAIL } = urlProperties;
    post(TEST_EMAIL, testEmail)
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
              setTestEmail({
                ...testEmail,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="name">Email</label>
          <input className="" type="email" id="email"
            onClick={(e) => {
              setTestEmail({
                ...testEmail,
                email: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="name">Auth Token</label>
          <input className="" type="text" id="auth-token"
            onClick={(e) => {
              setTestEmail({
                ...testEmail,
                authToken: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="is-active">Status</label>
          <input className="" type="checkbox" id="is-active"
            onChange={(e) => {
              setTestEmail({
                ...testEmail,
                isActive: e.target.value
              });
            }} />
        </div>
      </form>
    </div>
  );
}


export default TestEmail;

