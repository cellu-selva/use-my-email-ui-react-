import React, { useState } from 'react';
import { urlProperties } from "../../../Utils/constant";
import { post, put } from '../../../Utils/rest-util';

const { TEST_EMAIL } = urlProperties;
const TestEmail = (props) => {
  const {
    readOnly,
    childData,
    closeModal
  } = props;
  const [testEmail, setTestEmail] = useState(JSON.parse(JSON.stringify(childData)));

  const saveData = () => {
    const method = testEmail.id ? put : post;
    const url = testEmail.id ? `${TEST_EMAIL}/${testEmail.id}` : `${TEST_EMAIL}`;
    method(url, testEmail)
      .then(resp => { })
      .finally(closeModal)
  }

  // const status = [{
  //   id: 'free',
  //   name: 'Free'
  // },
  // {
  //   id: 'engaged',
  //   name: 'Engaged'
  // }]

  return (
    <div className="">
      <form className="">
        <div className="">
          <label className="" htmlFor="name">Name</label>
          <input className="" type="text" id="name"
            readOnly={readOnly}
            value={testEmail.name}
            onChange={(e) => {
              setTestEmail({
                ...testEmail,
                name: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="name">Email</label>
          <input className="" type="email" id="email"
            readOnly={readOnly}
            value={testEmail.email}
            onChange={(e) => {
              setTestEmail({
                ...testEmail,
                email: e.target.value
              });
            }} />
        </div>
        <div className="">
          <label className="" htmlFor="name">Auth Token</label>
          <input className="" type="text" id="auth-token"
            readOnly={readOnly}
            value={testEmail.authToken}
            onChange={(e) => {
              setTestEmail({
                ...testEmail,
                authToken: e.target.value
              });
            }} />
        </div>
        {/* <div className="">
          <label className="" htmlFor="is-active">Status</label>
          <select className=""
            readOnly={readOnly}
            value={testEmail.status}
            onChange={(e) => {
              setTestEmail({
                ...testEmail,
                status: e.target.value,
              })
            }}>
            <option value="">select</option>
            {
              status.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))
            }
          </select>
        </div> */}
        {
          !readOnly ?
            <button onClick={(e) => {
              e.preventDefault();
              saveData();
            }}>{testEmail.id ? 'Update' : 'Create'}</button>
            : ""
        }
      </form>
    </div>
  );
}


export default TestEmail;

