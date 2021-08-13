import React, { useState } from "react";

const SignUp = () => {

  const [userDatails, setUserDatails] = useState({
    "firsName": "string",
    "lastName": "string",
    "dob": "string",
    "gender": "string",
    "username": "string",
    "email": "string",
    "phone": "string",
    "emailVerified": true,
    "rolesId": "string",
    "verificationToken": "string",
    "password": "string",
    "createdAt": "2021-08-09T17:01:30.302Z",
    "updatedAt": "2021-08-09T17:01:30.302Z",
    "isDeleted": true,
    "additionalProp1": {}
  });

  const registerUser = async () => {
    // validate the userDatails object for invalid data
    await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDatails)
    })
  }
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{ 'background-image': "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')" }}
          ></div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    onClick={(e) => {
                      setUserDatails({
                        ...userDatails,
                        firstName: e.target.value,
                      })
                    }}
                  />
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    onClick={(e) => {
                      setUserDatails({
                        ...userDatails,
                        lastName: e.target.value,
                      })
                    }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  onClick={(e) => {
                    setUserDatails({
                      ...userDatails,
                      email: e.target.value,
                    })
                  }}
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    onClick={(e) => {
                      setUserDatails({
                        ...userDatails,
                        password: e.target.value,
                      })
                    }}
                  />
                  <p className="text-xs italic text-red-500">Please choose a password.</p>
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    type="password"
                    placeholder="******************"
                    onClick={(e) => {
                      setUserDatails({
                        ...userDatails,
                        cPassword: e.target.value,
                      })
                    }}
                  />
                </div>
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                    DOB:
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="dob"
                    type="dob"
                    placeholder="date of birth"
                    onClick={(e) => {
                      setUserDatails({
                        ...userDatails,
                        dob: e.target.value,
                      })
                    }}
                  />
                  <p className="text-xs italic text-red-500">Please date of birth.</p>
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" for="gender">
                    Gender
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="gender"
                    type="text"
                    placeholder="gender"
                    onClick={(e) => {
                      setUserDatails({
                        ...userDatails,
                        Gender: e.target.value,
                      })
                    }}
                  />
                </div>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={(e) => {
                    registerUser();
                  }}
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./index.html"
                >
                  Already have an account? Login!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
